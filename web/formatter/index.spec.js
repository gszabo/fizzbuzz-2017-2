'use strict';

const { expect } = require('chai');
const format = require('./');

describe('Web Formatter', function() {

  it('formats one line', function() {
    expect(format([{ num: 1, toPrint: 'one' }])).to.eql('1 - one');
  });

  it('separates multiple lines with newline character', function() {
    expect(format([
      { num: 1, toPrint: 'one' },
      { num: 2, toPrint: 'two' }
    ])).to.eql('1 - one\n2 - two');
  });

});
