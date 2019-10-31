var mongoose =require('mongoose');

var Schema = mongoose.Schema;

var commentsShema = new Schema({
	blog_id:String,
	user_id:String,
	likes:Number,
	text:String,
	date:{type:Date,default:Date.now}
});

module.exports = mongoose.model('comments',commentsShema);