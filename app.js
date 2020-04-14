'use strict';

const debug = require('debug')('egg-passport-line');
const assert = require('assert');
const Strategy = require('passport-line').Strategy;

module.exports = app => {
  const config = app.config.passportLine;
  config.passReqToCallback = true;
  assert(config.key, '[egg-passport-line] config.passportLine.key required');
  assert(
    config.secret,
    '[egg-passport-line] config.passportLine.secret required'
  );
  config.channelID = config.key;
  config.channelSecret = config.secret;

  // must require `req` params
  app.passport.use(
    'line',
    new Strategy(config, (req, accessToken, refreshToken, profile, done) => {
      // format user
      const user = {
        accessToken,
        refreshToken,
        ...profile,
      };
      debug('%s %s get user: %j', req.method, req.url, user);

      // let passport do verify and call verify hook
      app.passport.doVerify(req, user, done);
    })
  );
};
