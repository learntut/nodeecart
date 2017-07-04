var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PaymentMethodSchema = new Schema({
	payment_method_code: String,
	payment_method_desc: String
});
module.exports = mongoose.model('PaymentMethod', PaymentMethodSchema);