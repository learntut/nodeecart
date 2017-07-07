var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CategorySchema = new Schema({
	CategoryCode:{type: String , required: true, unique: true},
	Categoryname: {type: String, required: true},
	Title : {type: String, required: true},
	CategoryParent: String,
	active: {type: Boolean, default :true},
	updated: {type: Date,   default: Date.now}
});
module.exports = mongoose.model('Category', CategorySchema);

