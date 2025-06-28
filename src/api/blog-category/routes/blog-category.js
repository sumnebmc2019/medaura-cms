'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/blog-categories',
      handler: 'blog-category.find',
      config: { policies: [], middlewares: [] }
    },
    {
      method: 'GET',
      path: '/blog-categories/:id',
      handler: 'blog-category.findOne',
      config: { policies: [], middlewares: [] }
    },
    {
      method: 'POST',
      path: '/blog-categories',
      handler: 'blog-category.create',
      config: { policies: [], middlewares: [] }
    },
    {
      method: 'PUT',
      path: '/blog-categories/:id',
      handler: 'blog-category.update',
      config: { policies: [], middlewares: [] }
    },
    {
      method: 'DELETE',
      path: '/blog-categories/:id',
      handler: 'blog-category.delete',
      config: { policies: [], middlewares: [] }
    }
  ]
};
