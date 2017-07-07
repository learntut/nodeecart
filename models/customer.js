var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AddressSchema = new Schema{
	address_1: String,
	address_2: String,
	address_3: String,
	State: String,
	Country: String,
	active: {type: Boolean, default : false}
}
module.exports = mongoose.model('Address', AddressSchema);
var CustomerSchema = new Schema({
	first_name: String,
	middle_name: String,
	last_name: String,
	Gender : String,
	email_address: String,
	Phone_number: Number,
	login_name: String,
	login_password : String,
	Address:[Address],
	active: {type: Boolean, default :true},
	updated: {type: Date,   default: Date.now}
});
module.exports = mongoose.model('Customer', CustomerSchema);

