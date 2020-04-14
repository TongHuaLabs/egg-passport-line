'use strict';

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
    return app.httpRequest()
      .get('/')
      .expect('hi, passportLine')
      .expect(200);
  });
});
