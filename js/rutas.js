// custom.js
(function (window, document) {
	var _frame = _.getID('vista');

	_frame.enrutar()
		.ruta('/', 'vistas/home.html', null, null)
		.ruta('/productos','vistas/prod.html', 'productos', null)
		.ruta('/servicios-CentralFrenos','vistas/servicios-central_frenos.html',null,null)
		.ruta('/servicios-TecnoFrenos','vistas/servicios-tecno_frenos.html',null,null);

})(window, document); 