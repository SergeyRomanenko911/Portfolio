$('document').ready(function(){
	/*header background*/
	$(window).on('scroll', function(){
		if($(document).scrollTop()>1){
			$("#header").removeClass("header_background");
			$("#header").addClass("header_background_scroll");

			
		}else{
			$("#header").removeClass("header_background_scroll");
			$("#header").addClass("header_background");


		}
	});
	//menu
	var touch = $('.menu_btn');
	var menu = $('.menu_li');

	$(touch).on('click', function(e){
		e.preventDefault;
		menu.slideToggle();
	});

	$(window).resize(function(){
		var wid = $(window).width();
		if(wid>760&&menu.is(':hidden')){
			menu.removeAttr('style');
		}
	});

	//menu
	var touch1 = $('.social_menu');
	var menu1 = $('.social_li');

	$(touch1).on('click', function(e){
		e.preventDefault;
		menu1.slideToggle();
	});

	$(window).resize(function(){
		var wid1 = $(window).width();
		if(wid1>760&&menu1.is(':hidden')){
			menu1.removeAttr('style');
		}
	});


	//FEEDBACK
	$("#form_feedback").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form_feedback").trigger("reset");
		});
		return false;
	});
	
	//плавный переход по якорю навигация, bottom_button

	$("#menu").on("click", "a", function(event){
		event.preventDefault();

		var id = $(this).attr('href'),
		    top = $(id).offset().top;

		$('body,html').animate({scrollTop:top}, 500);
	});

	$("#write").on("click", function(event){
		event.preventDefault();

		var id = $(this).attr('href'),
		    top = $(id).offset().top;

		$('body,html').animate({scrollTop:top}, 500);
	});
});