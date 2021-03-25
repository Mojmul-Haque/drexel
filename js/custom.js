$(function () {
	"use strict";


	//banner slider
	$('.banner_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 3500,
		dots: false,
		nextArrow: '<i class="fas fa-chevron-right next_arrow">',
		prevArrow: '<i class="fas fa-chevron-left prev_arrow">',
		fade: true,
		speed: 1200,
		swipe: true,
	});


	//	$('.carousel').flickity({
	//		pageDots: false,
	//		slidesToShow: 2,
	//	});




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


	// category item slider start

	$('.category_item').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 4000,
		dots: false,
		nextArrow: '<i class="fas fa-chevron-right next_arrow">',
		prevArrow: '<i class="fas fa-chevron-left prev_arrow">',
		speed: 300,
		swipe: true,
	});


	//product slider
	$('.product_slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 1200,
		dots: false,
		nextArrow: '<i class="fas fa-chevron-right next_arrow">',
		prevArrow: '<i class="fas fa-chevron-left prev_arrow">',
		speed: 500,
		swipe: true,
	});

	// menu fix start

	$(window).on('scroll', function () {
		var scoll = $(this).scrollTop();
		if (scoll > 0) {
			$('.main_menu').addClass('menu_fix  animate__animated animate__fadeInDown');
		} else {
			$('.main_menu').removeClass('menu_fix animate__animated animate__fadeInDown');
		}
	});


	//=====================================================================================================
	//_______________________ back to top button start ____________________________________________________

	//	$('.back_top').on('click', function () {
	//		$('html,body').animate({
	//			scrollTop: 0
	//		}, 800);
	//	});
	//	$(window).on('scroll', function () {
	//		var scoll = $(this).scrollTop();
	//
	//		if (scoll > 150) {
	//			$('.back_top').addClass('animate__animated animate__fadeInDownBig');
	//		} else {
	//			$('.back_top').removeClass('animate__animated animate__fadeInDownBig');
	//		}
	//
	//	});
	//	

	//________________________back to top button end _____________________________________________________

	//=============================================================================================


	// faq page collapse button start

	$('.faq_inner a.btn').click(function () {
		$('.faq_inner a.btn .hide').toggle();
	});

	$('.faq_inner a.btn').click(function () {
		$('.faq_inner a.btn .show').toggle();
	});

	// =====================================================================================================================

	//____________________________ shorping cart page start __________________________

	$('.my-cart-btn').on('click', function () {
		$('.back_top').addClass('animate__animated animate__shakeX').one(animationend, function () {
			$(this).removeClass('animate__animated animate__shakeX');
		});
	});

	// =====================================================================================================================
	// =====================================================================================================================

	//pagination part start

	$('.pagination ul li a').on('click', function () {
		$('.pagination ul li a').toggleClass('active');
	});

})


//____________________________ shorping cart page end __________________________

// ==========================================================================================================================
