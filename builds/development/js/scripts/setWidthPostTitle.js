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