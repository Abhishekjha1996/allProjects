const express = require("express");
const upost = express.Router();
const { PostModal } = require("../model/post.model");

upost.get("/", (req, res)=>{
    res.send("hello post")
})



module.exports={
    upost
}