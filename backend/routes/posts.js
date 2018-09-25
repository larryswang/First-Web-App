const express = require("express");

const Post = require("../models/post");

const router = express.Router();

router.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, PUT, OPTIONS"
  );
  next();
});
//CpohcewwifOTtqTh
router.post("", (req, res, next) => {
  const post = new Post({
    // pass js obj
    title: req.body.title,
    content: req.body.content
  });
  post.save().then(result => {
    res.status(201).json({
      message: "Post added sucessfully",
      postId: result._id
    });
  });
});

router.get("", (req, res, next) => {
  Post.find()
    .then(documents => {
      res.status(200).json({
        message: "Posts fetched succesfully!",
        posts: documents
      });
    });
});

router.get("/:id", (req, res, next) => {
  Post.findById(req.params.id).then(post => {
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message : 'Post not Found!'})
    }
  })
})

router.put("/:id", (req, res, next) => {
  const post = new Post ({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content
  });
  Post.updateOne({ _id: req.params.id }, post).then(result => {
    console.log(result);
    res.status(200).json({ message: "Update successful1" });
  })
});

router.delete("/:id", (req, res, next) => {
  Post.deleteOne( {_id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({ message: 'Post deleted!'});
  });

})


module.exports = router;
