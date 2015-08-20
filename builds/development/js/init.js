// Инициализация проекта
(function(){
	
	$(document).ready(function() {
		// Рендор записей на странице
		var template = Handlebars.compile($('#template-post').html());
		$('.posts').append(template(data));
		
		// Установка правильный значений
		setCountCol();
		setWidthPostTitle();
		setHeightPost();
		
		// Установка обработчиков 
		$(window).resize(function(){
			setCountCol();
			setWidthPostTitle();
			setHeightPost();
		});	
		
	});
		
}());