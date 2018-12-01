// custom.js
(function (window, document) {
	var _frame = _.getID('vista');

	_frame.enrutar()
		.ruta('/', 'vistas/home.html', 'js/home.js', null)
		.ruta('/productos','vistas/prod.html', null, null);

})(window, document); 