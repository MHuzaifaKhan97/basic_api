const router = require('express').Router();
const verify = require('./verifyToken');
// const User = require('../model/User');
const Posts = require('../model/Posts');
router.get('/', verify, async (req, res) => {
    // res.json({
    //     posts:{
    //         title:'My First post',
    //         description:'Random data you shouldn\'t access'
    //     }
    // })
    // console.log(User.findById({_id:req.user._id}))

    //checking if the emil exist

    const posts = await Posts.find();
    res.send(posts);
});

router.post('/addpost', verify, async (req, res) => {
    console.log("added post");
    const post = new Posts({
        title: req.body.title,
        description: req.body.description,
    });
    try {
        const savedpost = await post.save();
        console.log(savedpost);
        res.send(savedpost);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;