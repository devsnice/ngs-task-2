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
// Подсчёт количества колонок
var setCountCol = function setCountCol() {
	var width = parseInt($("body").css("width")),
		countCol = 3;
	
	if(width <= 768) {
		countCol = 2;
		if(width <= 480) {
			countCol = 1;
		}
	}
	
	$(".posts").attr("data-col", countCol);
}
//
var setHeightPost = function setHeightPost(){
		var post = $(".post > a"),
			countCol = $(".posts").attr("data-col");
		
			postHeights = [];
		
		// Получаем высоту каждого элемента
		post.each(function(){
			postHeights[postHeights.length] = parseInt($(this).css("height"));
		});
		
		// Находим высоту самого высокого блока в строке
		var postHeightInRow = [];
		for(var i = 0, j = 1, max = 0, length = postHeights.length; i < length; i++) {
			
			if(postHeights[i] > max) {
				max = postHeights[i];
			}
			
			if(j < countCol) {
				j+=1;
			}
			else {
				postHeightInRow[postHeightInRow.length] = max;
				j = 1;
				max = 0;
			}
					
		}
					
		// Устанавливаем одну высоту для всех элементов, которые находятся в одном ряду
		post.each(function(index){
			$(this).css("height", postHeightInRow[Math.floor(index/countCol)]);
		});
}
// Обработка тайтлов
var setWidthPostTitle = function setWidthPostTitle() {
	// Получаем все элементы с классом .post__info на странице
	var postTitle = $(".post__info"), 
		// получаем текущую ширину блока
		postInfo = $(postTitle[0]),
		infoWidth = parseInt($(postInfo).css("width")),
		// получаем ширину блока с датой публикации
		date  = $(postInfo).find(".post__time"),        
		dateWidth = parseInt(date.css("width"));

	postTitle.each(function(){
		var title = $(this).find(".post__title");
		
		// Устанавливаем допустимую ширину для .post__title
		title.css("width", infoWidth - dateWidth - 10);
	})
}