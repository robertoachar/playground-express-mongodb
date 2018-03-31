const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('@robertoachar/express-cors');
const express = require('express');
const helmet = require('helmet');

const app = express();
const { catchAll, notFound } = require('./error');
const router = require('./router');
const userRouter = require('./user/user.router');

app.use(helmet());
app.use(compression());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', router);
app.use('/users', userRouter);

app.use(notFound);
app.use(catchAll);

module.exports = app;
