const mongoose = require("mongoose")

const postSchema = mongoose.Schema({

    title: String,
    body : String,
    device : String,
    no_of_comments : Number,
    userID: String
    

},{
    versionKey: false
})


const PostModal = mongoose.model("post", postSchema)

module.exports = {
    PostModal
}