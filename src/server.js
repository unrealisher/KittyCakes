import sirv from 'sirv';
import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import * as sapper from '@sapper/server';

import mailer from './mailer';

const { PORT, NODE_ENV } = process.env; // eslint-disable-line no-undef
const dev = NODE_ENV === 'development';

const app = express();

app.use(bodyParser.json());

app.post('/post', (req, res) => {
	const { body } = req;

	mailer({
		text: `Данные о клиенте

		Имя клиента: ${body.name}
		Телефон: ${body.phoneNumber}

		${body.text}`
	});

	res.end();
});

app.use(
	compression({ threshold: 0 }),
	sirv('static', { dev }),
	sapper.middleware()
);

app.listen(PORT, err => {
	if (err) console.log('error', err); // eslint-disable-line no-console
});
