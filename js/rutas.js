// custom.js
(function (window, document) {
	var _frame = _.getID('vista');

	_frame.enrutar()
		.ruta('/', 'vistas/home.html', null, null)
		.ruta('/productos','vistas/prod.html', 'productos', 
			function(){
				var $modal =  $('#prodModal');


				$modal.on('show.bs.modal', function(event){
		      		var prod = $(event.relatedTarget),
		      			title = prod.data('title'),
		      			description = prod.data('description'),
		      			img = prod.data('img');

		      		$(this).find('img').attr('src',img);
		      		$(this).find('h3').text(title);
		      		$(this).find('div.modal-body').append('<p>'+description+'</p>');
		      	});

		      	$modal.on('hide.bs.modal', function(event){
		      		$(this).find('img').removeAttr('src');
		      		$(this).find('h3').empty();
		      		$(this).find('p').remove();
		      	});


		})
		.ruta('/servicios-CentralFrenos','vistas/servicios-central_frenos.html',null,null)
		.ruta('/servicios-TecnoFrenos','vistas/servicios-tecno_frenos.html',null,null)
		.ruta('/contacto', 'vistas/contact.html',null,null)
		.ruta('/nosotros', 'vistas/about.html',null,null);


})(window, document); 