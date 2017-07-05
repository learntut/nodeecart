var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Address
var CustomerSchema = new Schema({
	first_name: String,
	middle_name: String,
	last_name: String,
	Gender : String,
	email_address: String,
	Phone_number: Number,
	login_name: String,
	login_password : String,
	active: {type: Boolean, default :true},
	updated: {type: Date,   default: Date.now}
});
module.exports = mongoose.model('Customer', CustomerSchema);

