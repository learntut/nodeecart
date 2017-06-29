var	path = require('path');
module.exports ={
	index: function(req,res){
		res.render('Category/list');
	},
	create: function(req,res){
		res.render('Category/create');
	},
	edit: function(req,res){
		res.render('Category/create');
	},
	save: function(req,res){
		res.render('Category/create');
	},
	delete: function(req,res){
		res.render('Category/create');
	}
};