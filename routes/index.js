var express = require('express');
var router = express.Router();
var userModel = require('./users')
var postModel = require('./posts')
/* Data association. => this contains to interact between two models of a database.
for example in instagram a user have different posts so in this project it can be seen that a user
can keep trak of his posts by post id and a post can be identified by the user id that can be stored in it */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/alluserposts',async function(req, res, next) {
  let user = await userModel.findOne({_id:"65e68a965f10eb4c08093c41"}).populate('posts')
  res.send(user);
});


router.get('/createuser', async function(req, res, next) {
 let createduser = await userModel.create({
    username: "harsh",
    password: "harsh",
    posts: [],
    email: "harsh@gmail.com",
    fullName: "Harsh vandana sharma"
  })
  res.send(createduser);
});

router.get('/createpost', async function(req, res, next) {
 let createdpost = await postModel.create({
    postText: "Hello kaise ho saare",
    user: "65e68a965f10eb4c08093c41"
  })
  let user = await userModel.findOne({_id: "65e68a965f10eb4c08093c41"});
  user.posts.push(createdpost._id);
  await user.save();
  res.send("done");
});

module.exports = router;
