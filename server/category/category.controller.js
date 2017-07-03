var	path = require('path');
var Category = require('./category.model'); 

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
		category = new Category(req.body);
		// var category = new Category({
		// 	Categoryname: "test category",
		// 	Title : "test category",
		// 	Category: Number,
		// 	active: true,
		// 	updated: Date.now}
		// })
		console.log(category);
		category.save(function (err, Category) {  
		    if (err) {
		    	console.log('error :' + err);
		        res.send(err);
		    }
		    return res.status(201).json(Category);
		});

	},
	delete: function(req,res){
		res.render('Category/create');
	}
};