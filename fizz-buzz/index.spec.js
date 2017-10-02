'use strict';

const { expect } = require('chai');
const fizzbuzz = require('./');

describe('FizzBuzz', function() {

  describe('when given a number not divisible by 3 or 5', function() {

    it('returns with the number as a string', function() {
      expect(fizzbuzz(1)).to.eql('1');
      expect(fizzbuzz(2)).to.eql('2');
    });

  });

  describe('when the given number is divisible by 3', function() {

    it('returns Fizz', function() {
      expect(fizzbuzz(3)).to.eql('Fizz');
      expect(fizzbuzz(6)).to.eql('Fizz');
    });

  });

  describe('when the given number is divisible by 5', function() {

    it('returns Buzz', function() {
      expect(fizzbuzz(5)).to.eql('Buzz');
      expect(fizzbuzz(10)).to.eql('Buzz');
    });

  });

  describe('when the given number is divisible by 15', function() {

    it('returns FizzBuzz', function() {
      expect(fizzbuzz(15)).to.eql('FizzBuzz');
      expect(fizzbuzz(30)).to.eql('FizzBuzz');
    });

  });

});
