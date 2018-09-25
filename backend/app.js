const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");



const postsRoutes = require("./routes/posts");

const app = express();

mongoose.connect("mongodb+srv://shiyu:CpohcewwifOTtqTh@cluster0-i7agv.mongodb.net/node-angular?retryWrites=true")
.then(()=>{
  console.log('Connected to database!');
})
.catch(()=>{
  console.log('Connection failed');
});

app.use(bodyParser.json());


app.use((req, res, next) => {
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

app.use("/api/posts", postsRoutes);

module.exports = app;
