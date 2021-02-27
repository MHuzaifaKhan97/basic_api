const router = require('express').Router();
const verify = require('./verifyToken');
// const User = require('../model/User');

router.get('/', verify, (req,res) => {
    // res.json({
    //     posts:{
    //         title:'My First post',
    //         description:'Random data you shouldn\'t access'
    //     }
    // })
    // console.log(User.findById({_id:req.user._id}))
    res.send(req.user);
});


module.exports = router;