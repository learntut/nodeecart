var	path = require('path');
var Category = require('../../models/productcategory');
module.exports ={	
	index: function(req,res){
		Category.find(function (err, categories) {
			if(!err){
				res.render('Category/list',{
					categories: categories
				});
			} else{
				console.log('error :' + err);
			}
		});
	},
	create: function(req,res){
		res.render('Category/create');
	},
	edit: function(req,res){
		res.render('Category/create');
	},
	save: function(req,res){
		category = new Category(req.body);
		category.save(function (err, Category) {  
		    if (err) {
		    	console.log('error :' + err);
		        res.send(err);
		    }
		   // return res.status(201).json(Category);
		   res.redirect('/admin/category');
		});
	},
	delete: function(req,res){
		Category.findOne({_id: req.params.id}, function (err, category) {
			res.redirect('/admin/category');
		});
		// res.render('Category/create');
	}
};