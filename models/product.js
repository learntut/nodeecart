var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = new Schema({
	product_name: String,
	product_brand: String,
	product_description: String,
	product_image: String,
	product_price: Number,
	product_color: String,
	product_size: String,
	active: {type: Boolean, default :true},
	updated: {type: Date,   default: Date.now}
});
module.exports = mongoose.model('Customer', CustomerSchema);