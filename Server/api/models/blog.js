var mongoose =require('mongoose');

var Schema = mongoose.Schema;

var blogShema = new Schema({
	user_id:String,
	title:String,
	likes:Number,
	views:Number,
	tags:String,
	text:String,
	date:{type:Date,default:Date.now}
});


module.exports = mongoose.model('blogs',blogShema);