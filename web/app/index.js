'use strict';

const express = require('express');
const app = express();

const fizzbuzzPrinter = require('../../fizz-buzz-printer');
const format = require('../formatter');

app.get('/api', function(req, res) {
  res.header('Content-Type', 'text/plain');

  const range = {
    from: parseInt(req.query.from),
    to: parseInt(req.query.to)
  }

  const body = format(fizzbuzzPrinter(range));

  res.end(body);
});

module.exports = app;
