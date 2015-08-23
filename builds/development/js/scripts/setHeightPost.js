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