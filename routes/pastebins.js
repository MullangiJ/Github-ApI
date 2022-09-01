const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
var uuid = require('uuid');
const { request } = require('express');

const checkAuth =require('../middleware/check-auth')
/*router.get('/:uuid', checkAuth, async(req,res)=>{
    try{
        const posts = await Post.findOne({uuid: req.params.uuid});
        console.log(posts);
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});*/
//Submits a Post
router.post('/',checkAuth,async(req,res)=>{
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        uuid: uuid.v4()
    });
    try{
        console.log(post)
    const savedPost = await post.save();
    res.json({uuid:savedPost.uuid})
    }catch(err){
        console.log('Error:',err);
        res.json({message: err});
    }
});

module.exports = router;