const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/nayaappforgolus");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  postText: {
    type: String,
    required: true,
  },
  user : {
    type : Schema.Types.ObjectId,
    ref : 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Array,
    default: []
  },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
