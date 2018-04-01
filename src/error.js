/* eslint no-unused-vars: 0 */

const winston = require('winston');

module.exports.notFound = (req, res, next) => {
  winston.warn('Not found');

  res.status(404).json({ message: 'Not found' });
};

module.exports.catchAll = (err, req, res, next) => {
  winston.error(err.message);

  res.status(500).json({ message: err.message });
};
