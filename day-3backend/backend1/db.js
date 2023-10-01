const mongoose = require("mongoose")

connecttion = mongoose.connect("mongodb+srv://abhishek:abhishekjha@cluster0.hctpvp4.mongodb.net/filedata?retryWrites=true&w=majority")

module.exports = {
    connecttion
}