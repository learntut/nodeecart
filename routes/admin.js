var express = require('express');
var categorycontroller = require('../server/category/categorycontroller');
var router = express.Router();

module.exports = function(app) {
	router.get('/category', categorycontroller.index);
	router.get('/category/create', categorycontroller.create);
	router.get('/category/edit/:id', categorycontroller.edit);
	router.get('/category/delete/:id', categorycontroller.edit);
	// router.get('/admin/create', controller.create);
	// router.post('/create', controller.save);
	// router.post('/admin/save', controller.save);
	// router.get('/edit/:id', controller.edit);
	// router.put('/edit', controller.save);
	// router.get('/delete/:id', controller.delete);
	app.use('/admin',router);
};