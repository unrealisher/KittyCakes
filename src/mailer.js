import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'kittycakes@yandex.ru',
        pass: 'somekish'
    }
}, {
    from: 'KittyCakes <kittycakes@yandex.ru>',
    to: 'kittycakes@yandex.ru',
    subject: 'Новый заказ на KittyCakes',
});

const mailer = message => {
    transporter.sendMail(message)
};

export default mailer;
