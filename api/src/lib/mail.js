const nodemailer = require('nodemailer');
const { resolve } = require('path');
const exphbs = require('express-handlebars');
const nodemailerhbs = require('nodemailer-express-handlebars');
const mailConfig = require('../config/mail');

const { host, port, secure, auth } = mailConfig;

const transporter = nodemailer.createTransport({
  host,
  port,
  secure,
  auth: auth.user ? auth : null,
});

function configureTemplates() {
  const viewPath = resolve(__dirname, '..', 'app', 'views', 'emails');
  transporter.use(
    'compile',
    nodemailerhbs({
      viewEngine: exphbs.create({
        layoutsDir: resolve(viewPath, 'layouts'),
        partialsDir: resolve(viewPath, 'partials'),
        defaultLayout: 'default',
        extname: '.hbs',
      }),
      viewPath,
      extName: '.hbs',
    })
  );
}

async function sendMail(message) {
  await configureTemplates();

  return transporter.sendMail({
    ...mailConfig.default,
    ...message,
  });
}

module.exports = sendMail;
