const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'It works!' });
});

router.get('/healthz', (req, res) => {
  mongoose.connection.db
    .admin()
    .ping()
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(200));
});

module.exports = router;
