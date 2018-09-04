"use strict";

$(document).ready(function(){
$(".search_form").removeClass("search_form_none");
	//search
	var search = false;
	$('.search_b').on('click', function(event){
		if(search==false){
			$(".social_header").addClass("social_none");
			$(".search_form").addClass("search_form_block");
			$(".search_b").addClass("search_b_bord");

			search=!search;
		}else{
			$(".social_header").removeClass("social_none");
			$(".search_form").removeClass("search_form_block");
			$(".search_b").removeClass("search_b_bord");
			search=!search;
		}
		
	});


	//slider

	$('#slider').slick({
    arrows: true,
    dots: true,
    fade: true,
    appendArrows: $(".arrow"),
    responsive: [
    	{
      	breakpoint: 1024,
      		settings: {
	        arrows: false
     		}
    	}],
  });

	//menu
	var touch = $('.touch_menu');
	var menu = $('.bar');

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

	//menu_1
	var touch1 = $('.recept');
	var menu1 = $('.menu_1');

	$(touch1).on('click', function(e){
		e.preventDefault;
		menu1.slideToggle();

	});

	$(window).resize(function(){
		var wid = $(window).width();
		if(wid>760&&menu1.is(':hidden')){
			menu1.removeAttr('style');
		}
	});

	//menu_2
	var touch2 = $('.desert');
	var menu2 = $('.menu_2');

	$(touch2).on('click', function(e){
		e.preventDefault;
		menu2.slideToggle();
	});

	$(window).resize(function(){
		var wid = $(window).width();
		if(wid>760&&menu2.is(':hidden')){
			menu2.removeAttr('style');
		}
	});

	//menu_3
	var touch3 = $('.salat');
	var menu3 = $('.menu_3');

	$(touch3).on('click', function(e){
		e.preventDefault;
		menu3.slideToggle();
	});

	$(window).resize(function(){
		var wid = $(window).width();
		if(wid>760&&menu3.is(':hidden')){
			menu3.removeAttr('style');
		}
	});


});