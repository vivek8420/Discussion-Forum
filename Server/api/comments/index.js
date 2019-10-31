var express = require('express');  
var Comments = require('../models/comments');
var router = express.Router()

router.post('/', function(req, res){
	//console.log("save Comments");
	var comments = new Comments({
		blog_id: req.body.blog_id,
		user_id: req.body.user_id,
		likes:req.body.likes,
		text:req.body.text,
		date:req.body.date
	});

	comments.save(function(err) {
		if (err) throw err;
		res.json({ success: true });
	});
});

router.get('/:id',function(req, res){
	//console.log("comment id:"+req.params.id);
	Comments.find({"blog_id":req.params.id},function(err,data){
		if(err) throw err;
		res.send(data);
	});
	
});

router.get('/',function(req,res){
	//console.log("get all comments");
	Comments.find({},function(err,data){
		if(err) throw err;
		res.send(data);
	});
});

router.delete('/user_id/:id',function(req,res){
	//console.log("delete comments:"+req.params.id);
	Comments.remove({user_id:req.params.id},function(err){
		if(err) throw err;
		res.send({sucess:true});
	});
});

router.delete('/blog_id/:id',function(req,res){
	//console.log("delete blog"+req.params.id);
	Comments.remove({blog_id:req.params.id},function(err){
		if(err) throw err;
		res.send({sucess:true});
	});
});

router.delete('/:id',function(req,res){
	//console.log("delete comment:"+req.params.id);
	Comments.remove({_id:req.params.id},function(err){
		if(err) throw err;
		res.send({sucess:true});
	});
});

router.put('/likes',function(req,res){
	//console.log("find by id:"+req.body.id);
	Comments.findByIdAndUpdate(req.body.id,{
			likes:req.body.likes
		},function(err,data){  
	        if(err)
	        	throw err;
	        res.json({sucess:true});  
      });
});

router.put('/text',function(req,res){
	//console.log("find by id:"+req.body.id);
	Comments.findByIdAndUpdate(req.body.id,{
			text:req.body.text
		},function(err,data){  
	        if(err)
	        	throw err;
	        res.json({sucess:true});  
      });
});

module.exports = router;