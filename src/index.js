const mongoose = require('mongoose');
const winston = require('winston');

const app = require('./app');
const config = require('./config');

mongoose.connect(config.DATABASE);
mongoose.Promise = global.Promise;

mongoose.connection.on('connected', () => {
  winston.info('Mongoose connected!');
});

mongoose.connection.on('disconnected', () => {
  winston.warn('Mongoose disconnected!');
  process.exit(1);
});

mongoose.connection.on('error', (err) => {
  winston.error('Mongoose Error!', err.message);
  process.exit(1);
});

require('./user/user.model');

app.listen(config.PORT, () => {
  Object.keys(config).forEach((key) => winston.info(`${key}: ${config[key]}`));

  winston.info('Express is running...');
});
