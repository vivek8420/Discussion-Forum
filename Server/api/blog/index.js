var express = require('express');  
var Blog = require('../models/blog');
var router = express.Router()

router.post('/', function(req, res){
	//console.log("In blog post");
	var blog = new Blog({
		user_id: req.body.user_id,
		title:req.body.title,
		likes:req.body.likes,
		tags:req.body.tags,
		text:req.body.text,
		date:req.body.date
	});
	blog.save(function(err){
		if (err) throw err;
		res.json({ success: true });
	});
});


router.get('/:id',function(req, res){
	//console.log("blog id:"+req.params.id);
	var blog=Blog.findOne({"_id":req.params.id});
	Promise.all([blog]).then(function(results){
		blog=results[0].toJSON();
		res.json(blog);	
	}).catch(function(err){
		res.status(500).json({error:err});
	});
});

router.get('/user_id/:id',function(req,res){
	//console.log("all user blogs"+req.params.id);
	Blog.find({"user_id":req.params.id},function(err,data){
		if(err) throw err;
		res.json(data);
	});
});


router.get('/',function(req,res){
	//console.log("all blogs");
	Blog.find({},function(err,data){
		if(err) throw err;
		res.json(data);
	});
});


router.delete('/:id',function(req,res){
	//console.log("delete blog:"+req.params.id);
	Blog.remove({_id:req.params.id},function(err){
		if(err) throw err;
		res.send({sucess:true});
	});
});

router.delete('/user_id/:id',function(req,res){
	//console.log("delete blog:"+req.params.id);
	Blog.remove({user_id:req.params.id},function(err){
		if(err) throw err;
		res.send({sucess:true});
	});
});

router.put('/text',function(req,res){
	//console.log("find by id:"+req.body.id);
	Blog.findByIdAndUpdate(req.body.id,{
			text:req.body.text
		},function(err,data){  
	        if(err)
	        	throw err;
	        res.json({sucess:true});  
      });
});

router.put('/likes',function(req,res){
	//console.log("find by id:"+req.body.id);
	Blog.findByIdAndUpdate(req.body.id,{
			likes:req.body.likes
		},function(err,data){  
	        if(err)
	        	throw err;
	        res.json({sucess:true});  
      });
});

module.exports = router;	