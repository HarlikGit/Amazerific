"use strict";

var toDos = [
"Закончить писать эту книгу",
"Вывести Грейси на прогулку в парк", 
"Ответить на электронные письма", 
"Подготовиться к лекции в понедельник", 
"Обновить несколько новых задач", 
"Купить продукты"
];

$("document").ready( function(){
	$(".tabs a span").toArray().forEach(function (element) { 
		// создаем обработчик щелчков для этого элемента 
		$(element).on("click", function () {
			// поскольку мы используем версию элемента jQuery,
			// нужно создать временную переменную,
			// чтобы избежать постоянного обновления
			var $element = $(element);
			$(".tabs a span").removeClass("active"); 
			$(element).addClass("active");
			$("main .content").empty();

			if ($element.parent().is(":nth-child(1)")) { 
				for (var i = toDos.length-1; i > -1; i--) { 
					$(".content").append($("<li>").text(toDos[i]));
				}
			} 
			else if ($element.parent().is(":nth-child(2)")) { 
				toDos.forEach(function (todo) { 
					$(".content").append($("<li>").text(todo));
				});
			} 
			else if ($element.parent().is(":nth-child(3)")) { 
				$(".content").append(
					'<input type="text" class="inp">'+
					'<button class="btn">+</button>'+
					'<button class="btn1">-</button>'
				);
				var newToDo;
				$('.btn').on('click',function(){
					newToDo= $('.inp').val();
					if (newToDo!='') {
						toDos.push( newToDo);
						alert('Новое задание "'+newToDo+'" успешно добавлено!');
						$('.inp').val("");
					}
				})

				$('.btn1').on('click',function(){
					newToDo= $('.inp').val();
					if (newToDo!='') {
						for (var i = toDos.length-1; i > -1; i--){
							if (toDos[i] == newToDo){
								delete toDos[i]
								alert('Задание "'+newToDo+'" успешно удалено!');
							}
						}
						$('.inp').val("");
					}
				})
			
			}
			return false;
		})
	})
	$(".tabs a:first-child span").trigger("click");
})



var main = function () {
	"use strict";
	$(".tabs a span").toArray().forEach(function (element) {
		$(element).on("click", function () {
			var $element = $(element);
			$(".tabs a span").removeClass("active");
			$element.addClass("active");
			$("main .content").empty();
			if ($element.parent().is(":nth-:child(1)")) {
				console.log("Щелчок на первой вкладке!");
			} else if ($element.parent().is(":nth-:child(2)")) {
				console.log("Щелчок на второй вкладке!");
			} else if ($element.parent().is(":nth-:child(3)")) {
				console.log("Щелчок на третьей вкладке!");
			}
			return false;
		});
	});
};
	