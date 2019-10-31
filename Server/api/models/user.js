var mongoose =require('mongoose');

var Schema = mongoose.Schema;

var userShema = new Schema({
	user_id:String,
	password:String,
	name:String,
	email:String,
	mobile_no:String,
	skills:String,
	motto:String,
});

module.exports = mongoose.model('users',userShema);