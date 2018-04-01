const express = require('express');
const catchError = require('express-catch-errors');

const router = express.Router();
const { create, list, remove, update, view } = require('./user.controller');

router
  .route('/')
  .get(catchError(list))
  .post(catchError(create));

router
  .route('/:id')
  .get(catchError(view))
  .put(catchError(update))
  .delete(catchError(remove));

module.exports = router;
