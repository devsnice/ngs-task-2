// Инициализация проекта
(function(){
	
	$(document).ready(function() {		
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