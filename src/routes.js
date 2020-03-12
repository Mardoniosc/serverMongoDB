const express = require('express');

const routes = express.Router();

const PostController = require('./controller/PostController');

routes.get('/posts', PostController.index);
routes.get('/posts/:id', PostController.show);
routes.delete('/posts/:id', PostController.destroy);

module.exports = routes;
