$(document).ready(function(){
	$('ul.tab li a:first').addClass('active');
	$('.secciones article').hide(); //ocultamos los article de la clase secciones
	$('.secciones article:first').show();


	$('ul.tab li a').click(function(){
		$('ul.tab li a').removeClass('active');
		$(this).addClass('active'); //agregamos fondo a 
		$('.secciones article').hide(); //Cuando hacemos click ocultamos el anterior
		var activeTab = $(this).attr('href');
		$(activeTab).show();
		return false;
	});
});