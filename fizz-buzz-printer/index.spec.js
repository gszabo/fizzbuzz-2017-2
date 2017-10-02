'use strict';

const { expect } = require('chai');
const fizzbuzzPrinter = require('./');

describe('FizzBuzz Printer', function() {

  describe('when given a wrong range', function() {

    it('returns empty list', function() {
      expect(fizzbuzzPrinter({ from: 5, to: 3 })).to.eql([]);
    });

  });

  describe('when the range has one element', function() {

    it('returns one element list', function() {
      expect(fizzbuzzPrinter({ from: 5, to: 5 })).to.eql([
        { num: 5, toPrint: 'Buzz' }
      ]);
    });

  });

  describe('when the range has more elements', function() {

    it('returns each element transformed in a list', function() {
      expect(fizzbuzzPrinter({ from: 5, to: 7 })).to.eql([
        { num: 5, toPrint: 'Buzz' },
        { num: 6, toPrint: 'Fizz' },
        { num: 7, toPrint: '7' }
      ]);
    });

  });

});
