const express = require('express')

const app = express();


app.use('/api/posts', (req, res, next) => {
  const posts = [
    { id : 'fadafdsafdsa', title: 'First server-side post', contest: "this is coming from post"},
    { id : 'jhbiuhblkb', title: 'Second server-side post', contest: "this is coming from post!"}
  ];
  res.status(200).json({
    message: 'Posts fetch successfully!',
    posts: posts
  });
});

module.exports = app;
