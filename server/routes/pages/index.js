const { Router } = require('express');
const mainRouter = require('./main-pages');
const favoritesRouter = require('./favorites-pages');
const aboutRouter = require('./about-pages');
const contactRouter = require('./contact-pages');
const loginRouter = require('./login-pages');

const router = Router();

module.exports = (params) => {
  router.use(mainRouter(params));
  router.use(favoritesRouter(params));
  router.use(aboutRouter(params));
  router.use(contactRouter(params));
  router.use(loginRouter(params));
  return router;
};
