import sirv from 'sirv';
import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env; // eslint-disable-line no-undef
const dev = NODE_ENV === 'development';

const app = express();

app.use(bodyParser.json());

app.get('/get', (req, res) => {
	res.setHeader('Content-Type', 'application/json');

	res.end(JSON.stringify({
		hello: 'Hello world'
	}))
});

app.post('/post', (req, res) => {
	// const result = req.body;
	//
	// console.log(result);

	res.setHeader('Content-Type', 'application/json');

	res.end(JSON.stringify({
		word: 'thx'
	}));
});

app.use(
	compression({ threshold: 0 }),
	sirv('static', { dev }),
	sapper.middleware()
);

app.listen(PORT, err => {
	if (err) console.log('error', err); // eslint-disable-line no-console
});
