var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
	name: String,
	Image: String,
	ParentCategory: Number,
	Category: Number,
	active: {type: Boolean, default :true},
	updated: {type: Date,   default: Date.now}
});
module.exports = mongoose.model('Category', CategorySchema);

