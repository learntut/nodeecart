var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
	Categoryname: String,
	Title : String,
	Image: String,
	Category: Number,
	active: {type: Boolean, default :true},
	updated: {type: Date,   default: Date.now}
});
module.exports = mongoose.model('Category', CategorySchema);

