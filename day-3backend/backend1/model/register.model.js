const mongoose = require("mongoose")

const userSchema = mongoose.Schema({

    name : String,
    email: String,
    gender : String,
    password : String,
    age: Number,
    city: String,    

},{
    versionKey: false
})


const UserModal = mongoose.model("user", userSchema)

module.exports = {
    UserModal
}