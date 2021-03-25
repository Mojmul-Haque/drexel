$(function () {

	"use strict";

	//banner slilder
	$('.banner_slilder').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 4000,
		dots: true,
		nextArrow: '<p class="next_arrow">Next</p>',
		prevArrow: '<p class="prev_arrow">Prev</p>',
		fade: true,
		speed: 1200,
		swipe: true,
	});



	//product slilder
	$('.product_slider1').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 1000,
		dots: false,
		nextArrow: '<p class="next_arrow">Next</p>',
		prevArrow: '<p class="prev_arrow">Prev</p>',
		speed: 600,

	});

	$('.product_slider5').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 1000,
		dots: false,
		nextArrow: '<p class="next_arrow">Next</p>',
		prevArrow: '<p class="prev_arrow">Prev</p>',
		speed: 600,

	});





//	$('.nav-tabs a').on('click', function (e) {
			//		e.preventDefault();
			//		$('.nav-link').removeClass('active');
			//		$(this).tab('show');
			//	});



	// $('.product_slider2').slick({
	//     slidesToShow: 3,
	//     slidesToScroll: 1,
	//     autoplay: false,
	//     autoplaySpeed: 1500,
	//     dots: false,
	//     fade: true,
	//     nextArrow: '<p class="next_arrow">Next</p>',
	//     prevArrow: '<p class="prev_arrow">Prev</p>',
	//     speed: 1200,
	// });


	//

	//	$('.product_slider3').slick({
	//		slidesToShow: 4,
	//		slidesToScroll: 1,
	//		autoplay: false,
	//		autoplaySpeed: 1500,
	//		dots: false,
	//		nextArrow: '<p class="next_arrow">Next</p>',
	//		prevArrow: '<p class="prev_arrow">Prev</p>',
	//		speed: 1200,
	//	});


	//
	//	$('.product_slider').slick({
	//		slidesToShow: 4,
	//		slidesToScroll: 1,
	//		autoplay: false,
	//		autoplaySpeed: 1500,
	//		dots: false,
	//		nextArrow: '<p class="next_arrow">Next</p>',
	//		prevArrow: '<p class="prev_arrow">Prev</p>',
	//		speed: 1200,
	//	});
	//
	//	$('.product_slider5').slick({
	//		slidesToShow: 4,
	//		slidesToScroll: 1,
	//		autoplay: false,
	//		autoplaySpeed: 1500,
	//		dots: false,
	//		nextArrow: '<p class="next_arrow">Next</p>',
	//		prevArrow: '<p class="prev_arrow">Prev</p>',
	//		speed: 1200,
	//	});


	//banner slilder
	$('.brand_logo_slider').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
		dots: false,
		nextArrow: '<p class="next_arrow">Next</p>',
		prevArrow: '<p class="prev_arrow">Prev</p>',
		speed: 1200,
	});

	//amime js file staret

	// banner 



	var animationName1 = 'animate__animated animate__bounceInDown ';

	var animationName2 = 'animate__animated animate__bounceInDown ';

	var animationName3 = 'animate__animated animate__bounceInDown ';

	var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend ';



	var click_btn = '.banner_part .next_arrow,.banner_part .prev_arrow, .banner_part .slick-dots li button';

	var headingAnimateClass = '.title_animate1,.title_animate2,.title_animate3,.title_animate4';

	var subTitleClass = '.sub_title_animate1,.sub_title_animate2,.sub_title_animate3,.sub_title_animate4';

	var anchorClass = '.anchor_animate1,.anchor_animate2,.anchor_animate3,.anchor_animate4';


	$(click_btn).on('click', function () {
		$(headingAnimateClass).addClass(animationName1).one(animationend, function () {
			$(this).removeClass(animationName1);
		})
	});


	$(click_btn).on('click', function () {
		$(subTitleClass).addClass(animationName2).one(animationend, function () {
			$(this).removeClass(animationName2);
		})
	});

	$(click_btn).on('click', function () {
		$(anchorClass).addClass(animationName3).one(animationend, function () {
			$(this).removeClass(animationName3);
		})
	});


	// slider text animation end

	//==============================================================
	// menu fix start

	$(window).on('scroll', function () {
		var scoll = $(this).scrollTop();
		if (scoll > 0) {
			$('header').addClass('menu_fix  animate__animated animate__fadeInDown');
		} else {
			$('header').removeClass('menu_fix animate__animated animate__fadeInDown');
		}
	});


	//=====================================================================================================

	// =====================================================================================================================

	//____________________________ shorping cart page start __________________________

	$('.my-cart-btn').on('click', function () {
		$('.back_top').addClass('animate__animated animate__shakeX').one(animationend, function () {
			$(this).removeClass('animate__animated animate__shakeX');
		});
	});


	// add start

//	$(window).on("load", function () {
//		//		$('.toast').delay(500).fadeIn(500);
//		$('.add').delay(100).fadeOut(500);
//
//
//	});
	
	
//	$('.toast').toast('toast')


})
