const mongoose = require('mongoose')

const Schema = mongoose.Schema

const blogSchema = new Schema({
  userid: {type: String},
  blogid: {type: String,required: false},
  title: {type: String,required: true},
  description: {type: String,required: true},
  comments: [{
    username: String,
    text: String
  }],
  image: {type: String}
}, { timestamps: true })

module.exports = mongoose.model('blogs', blogSchema)