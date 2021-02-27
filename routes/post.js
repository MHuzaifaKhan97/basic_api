const router = require('express').Router();
const verify = require('./verifyToken');
// const User = require('../model/User');
const Posts = require('../model/Posts');

// Get Posts
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

// Get Post By Id
router.get('/:id', verify, async (req, res) => {
    const posts = await Posts.findById({ _id: req.params.id });
    res.send(posts);
});

// Delete Post
router.delete('/deletepost/:id', verify, async (req, res) => {
    const posts = await Posts.deleteOne({ _id: req.params.id });
    res.send("Successfully Deleted Post");
});

// Add Post
router.post('/addpost', verify, async (req, res) => {
    const post = new Posts({
        title: req.body.title,
        description: req.body.description,
    });
    try {
        const savedpost = await post.save();
        res.send(savedpost);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Update Post
router.put('/updatepost/:id', verify, async (req, res) => {
    const post = new Posts({
        _id: req.params.id,
        title: req.body.title,
        description: req.body.description,
    });
    console.log(post);
    try {
        const updatepost = await post.update(post);
        res.send("Successfully Updated Post");
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;