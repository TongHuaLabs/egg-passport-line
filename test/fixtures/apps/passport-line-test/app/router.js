'use strict';

module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.home.index);

  app.passport.mount('line');
};
