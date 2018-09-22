const mongoose = require('mongoose');

// create schema, blueprint
const postSchema = mongoose.Schema({
  // javascript object
  title: { type: String, required: true },
  content: { type: String, required: true }
});

// in order to create data, we need to turn defination into model

module.exports = mongoose.model('Post', postSchema);

