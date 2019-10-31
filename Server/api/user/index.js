var express = require('express');  
var User = require('../models/user');
var router = express.Router()

router.get('/:id',function(req,res){
	//console.log("find user by id:"+req.params.id);
	var user=User.findOne({"user_id":req.params.id});
	Promise.all([user]).then(function(results){
		user=results[0].toJSON();
		res.json(user);
	}).catch(function(err){
		res.status(500).json({error:err});
	});
});

router.put('/:id',function(req,res){
	//console.log("find user by id:"+req.params.id);
	User.findByIdAndUpdate(req.param.id,{
			user_id: req.body.user_id,
			name: req.body.name,
			email:req.body.email,
			mobile_no: req.body.mobile_no,
			motto:req.body.motto,
			photo:req.body.photo
		},function(err,data){  
	        if(err)
	        	throw err;
	        res.json({sucess:true});  
      });
});


router.post('/', function(req, res){
	//console.log("new User");
	var user = new User({
		user_id: req.body.user_id,
		name: req.body.name,
		password:req.body.password,
		email:req.body.email,
		mobile_no: req.body.mobile_no,
		skills:req.body.skills,
		motto:req.body.motto
	});

	user.save(function(err) {
		if (err) throw err;
		res.end();
	});
});

router.get('/',function(req,res){
	//console.log("get all Users");
	User.find({},function(err,data){
		//console.log(data);
		if(err) throw err;
		res.send(data);
	});
});

router.delete('/:id',function(req,res){
	//console.log("delete user:"+req.params.id);
	User.deleteOne({user_id:req.params.id},function(err){
		if(err) throw err;
		res.send({sucess:true});
	});
});

module.exports = router;