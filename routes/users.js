

const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/nayaappforgolus");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }],
  dp: {
    type: String, // Assuming the DP (display picture) is stored as a URL or file path
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullName: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;

