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