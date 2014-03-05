var fluent = require('wire/config/fluent');
var TodosController = require('./TodosController');

var listTemplate = require('./list.html');

module.exports = fluent(function(config) {
	return config
		.add('todos@view', ['render', 'insert', 'qs'], function(render, insert, qs) {
			var view = render(listTemplate);
			qs('section').appendChild(view);
			return view;
		})
		.add('todos@controller', TodosController)
		.add('todos@model', function() {
			return [];
		});
});

//module.exports = {
//	todosController: new TodosController(),
//	todosModel: []
//};