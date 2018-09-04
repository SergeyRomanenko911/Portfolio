"use strict";


$('document').ready(function(){
	/*header background*/
	$(window).on('scroll', function(){
		if($(document).scrollTop()>1){
			$(".header").removeClass("header_background");
			$(".header").addClass("header_background_scroll");

			$(".b_top").removeClass("b_top_display");
			
		}else{
			$(".header").removeClass("header_background_scroll");
			$(".header").addClass("header_background");

			$(".b_top").addClass("b_top_display");

		}
	});

	//плавающая кнопка в топ
	$('.b_top').on('click', function(event){
		event.preventDefault();

		$('body,html').animate({scrollTop:$("#first_monitor").offset().top}, 500);
		
	});

	//плавный переход по якорю навигация, bottom_button

	$("#menu").on("click", "a", function(event){
		event.preventDefault();

		var id = $(this).attr('href'),
		    top = $(id).offset().top;

		$('body,html').animate({scrollTop:top}, 500);
	});

	$(".button_bottom").on("click", function(event){
		event.preventDefault();

		var id = $(this).attr('href'),
		    top = $(id).offset().top;

		$('body,html').animate({scrollTop:top}, 500);
	});

	//menu
	var touch = $('.touch_menu');
	var menu = $('.rightBar');

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


	//slider

	$('#slider').slick({
    arrows: false,
    dots: true
  });

});