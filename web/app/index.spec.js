'use strict';

const supertest = require('supertest');
const app = require('./');

describe('Web App', function() {

  it('responds with 200', function(done) {
    supertest(app)
      .get('/api?from=2&to=3')
      .expect(200)
      .end(done);
  });

  it('responds with text/plain content-type', function(done) {
    supertest(app)
      .get('/api?from=2&to=3')
      .expect('Content-Type', /text\/plain/)
      .end(done);
  });

  it('responds with fizzbuzz body', function(done) {
    supertest(app)
      .get('/api?from=9&to=10')
      .expect('9 - Fizz\n10 - Buzz')
      .end(done);
  });

});
