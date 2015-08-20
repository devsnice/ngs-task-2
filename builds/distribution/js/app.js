	var data = { 
	posts: [
	  {
		title: 'Зимняя Олимпиада в Сочи стала лучшей в истории Игр',
		description: 'Выступая в понедельник на церемонии вручения госнаград в Кремле..',
		date: "24 фев 2014",
		imagesrc: "/_1.jpg",
		link: '#'
	  },
	   {
		title: 'Количество паралимпийских видов спорта к Играм-2022 увеличится',
		description: 'На данный момент в программу Паралимпиады входят пять видов спорта',
		date: "24 фев 2015",
		imagesrc: "/_1.jpg",
		link: '#'
	  },
	  {
		title: 'Зимняя Олимпиада в Сочи стала лучшей в истории Игр',
		description: 'Выступая в понедельник на церемонии вручения госнаград в Кремле, которую проводит президент РФ Владимир Путин, представитель МОК отметил, что с самого начала подготовки Игр он ощущал "огромный эмоциональный заряд, который исходил ото всей команды, занятой в подготовке"',
		date: "24 фев 2014",
		imagesrc: "/_1.jpg",
		link: '#'
	  },
	    {
		title: 'Зимняя Олимпиада в Сочи стала лучшей в истории Игр',
		description: 'Выступая в понедельник на церемони',
		date: "24 фев 2014",
		imagesrc: "/_1.jpg",
		link: '#'
	  },
	    {
		title: 'Зимняя Олимпиада в Сочи стала лучшей в истории Игр',
		description: 'Выступая в понедельник на церемонии вручения госнаград в Кремле, которую провод.."',
		date: "24 фев 2014",
		imagesrc: "/_1.jpg",
		link: '#'
	  },
	   {
		title: 'Зимняя Олимпиада',
		description: 'Выступая в понедельник на церемонии вручения госнаград в Кремле, которую проводит президент..."',
		date: "24 фев 2014",
		imagesrc: "/_1.jpg",
		link: '#'
	  },
	  ]
   };
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
		var post = $(".post"),
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