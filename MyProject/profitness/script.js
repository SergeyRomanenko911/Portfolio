"use strict";


$('document').ready(function(){

	$(window).on('scroll', function(){
		if($(document).scrollTop()>48){
			$(".header_main").removeClass("header_main_no_fix");
			$(".header_main").addClass("header_main_fix");
			
		}else{
			$(".header_main").removeClass("header_main_fix");
			$(".header_main").addClass("header_main_no_fix");
		}
});

//slider

	$('#slider').slick({
	slidesToShow: 3,
    arrows: true,
    appendArrows: $(".arrows"),
    responsive: [
    	{
      	breakpoint: 550,
      		settings: {
	        slidesToShow: 1
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
//contacts
	var touch1 = $('.contact_but');
	var menu1 = $('.contact_inform');

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

	//плавный переход
	$(".scroll").on("click", "a", function(event){
		event.preventDefault();
		if ($(this).attr('href')) {
		var id = $(this).attr('href'),
		    top = $(id).offset().top;
		$('body,html').animate({scrollTop:top}, 500);}
	});


	//movie
	$(".play").on("click", function(){
		$(".movie_frame").addClass("if_display");
	});

});