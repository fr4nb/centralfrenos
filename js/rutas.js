// custom.js
(function (window, document) {
	var _frame = _.getID('vista');

	_frame.enrutar()
		.ruta('/', 'vistas/home.html', null, null)
		.ruta('/productos','vistas/prod.html', null, null);

})(window, document); 