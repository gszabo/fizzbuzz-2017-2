'use strict';

const fizzbuzz = require('../fizz-buzz');

module.exports = function fizzbuzzPrinter({ from, to }) {
  if (to < from)
    return [];

  const result = [];

  for (let i = from; i <= to; i++) {
    result.push({
      num: i,
      toPrint: fizzbuzz(i)
    });
  }

  return result;
};
