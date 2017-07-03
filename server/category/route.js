var express = require('express');
var controller = require('./category.controller');
var router = express.Router();
var methodOverride = require('method-override');
// router.use(methodOverride(function(req, res){
//       if (req.body && typeof req.body === 'object' && '_method' in req.body) {
//         // look in urlencoded POST bodies and delete it
//         var method = req.body._method
//         delete req.body._method
//         return method
//       }
// }));

module.exports = function(app) {
	router.get('/', controller.index);
	router.get('/create', controller.create);
	router.get('/admin/create', controller.create);
	router.post('/create', controller.save);
	router.post('/admin/save', controller.save);
	router.get('/edit/:id', controller.edit);
	router.put('/edit', controller.save);
	router.get('/delete/:id', controller.delete);
	app.use(router);
};


// module.exports = function(app) {
// 	// router.get('/', controller.index);
// 	// router.get('/category/create', controller.create);
// 	router.get('/', function(req, res) {
//     	console.log('lhi ');
// 	});
// 	app.use(router);
// };
// var express = require('express'),
// 	router = express.Router();
// module.exports = function(app) {
// 	router.get('/', function(req, res) {
//     	console.log('lhi ');
// 	});
// 	app.use(router);
// };

// var express = require('express'),
// 	router = express.Router();
// module.exports = function(app) {
// 	router.get('/', controller.index);

// 	app.use(router);

// };

// var express = require('express')
// var router = express.Router()

// // Home page route
// router.get('/admin/category', controller.index);
// // About page route
// router.get('/about', function (req, res) {
//   res.send('About this wiki')
// })

// module.exports = router;
