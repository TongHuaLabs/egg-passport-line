'use strict';
const request = require('supertest');
const mock = require('egg-mock');

describe('test/passport-line.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/passport-line-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest().get('/').expect('hi, passportLine')
      .expect(200);
  });

  it('should GET /passport/line redirect to auth url', () => {
    return request(app.callback())
      .get('/passport/line')
      .expect('Location', /^https:\/\/access.line.me\/oauth2/)
      .expect(302);
  });

  it('should GET /passport/line/callback redirect to auth url', () => {
    return request(app.callback())
      .get('/passport/line/callback')
      .expect('Location', /^https:\/\/access.line.me\/oauth2/)
      .expect(302);
  });
});
