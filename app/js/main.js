var slideout = new Slideout({
	'panel': document.getElementById('panel'),
	'menu': document.getElementById('mobile-menu'),
	'padding': -276,
	'tolerance': 70
});

document.querySelector('.slideout-menu-btn').addEventListener('click', function() {
	slideout.toggle();
});

if($('#mobile-menu a.fancybox').length) {
	document.querySelector('#mobile-menu a.fancybox').addEventListener('click', function() {
		slideout.toggle();
	});
}




$(document).ready(function(){




	$(function() {
		$('.top-tabs-caption').on('click', 'li:not(.active)', function() {
			$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.top-tabs').find('.top-tabs-content').removeClass('active').css({opacity: '0',display: 'none'}).eq($(this).index()).addClass('active').css('display', 'block').animate({opacity: '1'}, 300);

		})
	});

$('.top-tabs-caption').on('click', 'a', function(e) {
e.preventDefault();
});

	$(document).on('click', '.catalog-wrapp-item:not(.add)', function(e) {
		e.preventDefault(); 

		if ($('.catalog-wrapp-item.add').length) {
			$('.catalog-wrapp-item.add').after($('.item-c + .hide-content'));
			$('.catalog-wrapp-item').removeClass('add');
		}

		var thisEl = $(this).parent();
		var thisElPos = thisEl.position().top;

		if ($(this).parent().next().length) {
			while ( (thisEl.next().length) && (thisElPos == thisEl.next().position().top) ) {
				thisEl= thisEl.next();  
			}
		}

		var lastElement = thisEl;
		console.log(lastElement.index());
		$(this).addClass('add');
		var content = $(this).next();
		lastElement.after(content);
	});



	$('.catalog-wrapp-item').on('click', '.rate > *, .size-m, .calc-res *', function(e) {
		e.stopPropagation();
	});


	$(document).on('click', '.icon-close-content', function(e) {
		e.preventDefault(); 
		$('.catalog-wrapp-item.add').after($('.item-c + .hide-content'));
		$('.catalog-wrapp-item').removeClass('add');

	});

	$('.select-1').ikSelect({
		autoWidth: false,
		ddFullWidth: false
	});

	$('.mh-1').matchHeight();
	$('.catalog-wrapp-item').matchHeight();
	$('.wrapp-p').matchHeight({
		byRow: false 
	})

$('.mh-2').matchHeight();







	if($('.carousel-opinions').length) {
		$('.carousel-opinions').slick({
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 1,
			appendArrows: $(".carousel-opinions--arrows"),
			appendDots: $(".carousel-opinions--dots"),
			responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1
				}
			}
			]
		});
	}


	if($('.carousel-man').length) {
		$('.carousel-man').slick({
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 6,
			slidesToScroll: 1,
			responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 479,
				settings: {
					slidesToShow: 2
				}
			}
			]
		});
	}









 //    $("a.modal-form").fancybox({
 //       'hideOnContentClick': true,
 //          minWidth : 230,
 //          padding : 0,
 //          closeBtn : true
 
 // });



//  jQuery(function($){ 
//    $(".phone_mask_1").mask("+7(999) 999-9999");
//    $("#phone_mask_2").mask("+7(999) 999-9999");
// });





/* кнопка Вверх */
$("#back-top").hide();

$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 250) {
			$('#back-top').fadeIn(200);
		} else {
			$('#back-top').fadeOut(200);
		}

		var scrollBottom = $(document).height() - $(window).scrollTop() - $(window).height() ;


		if(scrollBottom < 60) {
			$('#back-top').css('bottom', '235px')
		} else {
			$('#back-top').css('bottom', '50px')
		}
	});

	$('#back-top a').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);

		return false;
	});
});






$('input,textarea').focus(function(){
	$(this).data('placeholder',$(this).attr('placeholder'))
	.attr('placeholder','');
}).blur(function(){
	$(this).attr('placeholder',$(this).data('placeholder'));
});

});








$(window).on('load', function() {

	menuDropDown()
	menuSlideDown();
	footerHeight();
	fixScrollBlock();
	fixScrollBlockCenter(100);
	jsSlide()

});

$(window).resize(function(){
	footerHeight();
	fixScrollBlockCenter(100);
})





// count footer height to pos bottom 
function footerHeight () {
	var footerHeight = $('.footer').outerHeight(),
	bodyHeight = $('.wrapper-p').outerHeight();

	$('.wrapper-p').css('paddingBottom', footerHeight);

};

//js-slide (раскрываемые блоки)
//если задавать single, будет открытым только один
function jsSlide(){
	$('body').on('click', '.js-slide-btn', function(e){
		e.preventDefault();
		
		if($(this).closest('.js-slide-wrap').data('js-slide') == 'single' && !$(this).closest('.js-slide-wrap').is('.open')) {
			$(this).closest('.js-slide-wrap-container').find('.js-slide-wrap.open').removeClass('open').children('.js-slide').slideUp(300);
			$(this).closest('.js-slide-wrap').toggleClass('open').children('.js-slide').slideToggle(400, function(){
				if($(this).closest('.fix-scroll')) {
					fixScrollBlockCenter(150);
				}
			});
			
		} else {
			$(this).closest('.js-slide-wrap').toggleClass('open').children('.js-slide').slideToggle(400, function(){
				if($(this).closest('.fix-scroll')) {
					fixScrollBlockCenter(150);
				}
			});
		}
		
		
	});
}


// блоки обратного звонка и корзины
function fixScrollBlock() {
	$('body').on('click', '.fix-scroll--btn', function(){
		if($(this).closest('.fix-scroll').is('.open')) {
			$(this).next('.fix-scroll--container').animate({'width': 0}, 400).closest('.fix-scroll').removeClass('open');
		} else {
			$(this).next('.fix-scroll--container').animate({'width': '281px'}, 400).closest('.fix-scroll').addClass('open');
		}
	});
}


// центрирование блока Обратный звонок и Корзина

function fixScrollBlockCenter(speed){
	var bodyHeight = $('body').height(),
	fixBlockHeight = $('.fix-scroll--wrap').outerHeight();

	if(!$('.fix-scroll--wrap').is('active')) {
		$('.fix-scroll--wrap').animate({'top': (bodyHeight - fixBlockHeight) / 2 }, speed, function(){
			$(this).addClass('active')
		});
	} else {
		$('.fix-scroll--wrap').animate({'top': (bodyHeight - fixBlockHeight) / 2 }, speed);
	}
	
}

function menuDropDown(){
	$('.h-menu li:has(.h-menu--dd)').addClass('slide');

	var intervalID;

	$(".h-menu .slide").hover(function () {
		var popup = $(this).find(".h-menu--dd");

		intervalID=setTimeout(
			function() {
				popup.fadeIn(300);
			}, 100);
	},

	function () {
		$(".h-menu .slide .h-menu--dd").fadeOut(300);
		clearInterval(intervalID);
	}
	);
}


function menuSlideDown(){
	$('.m-menu li:has(.m-menu--sd)').addClass('slide');

	var intervalID;
	
	$('body').on('click', '.m-menu .slide .m-menu--pointer', function(){
		var thisEl = $(this).closest('li');
		if(thisEl.is('.open')) {
			thisEl.removeClass('open').find('.m-menu--sd').slideUp(300);
		} else {
			thisEl.addClass('open').find('.m-menu--sd').slideDown(300);
		}
	});

	$(".m-menu .slide").hover(function () {
		var popup = $(this).find(".m-menu--dd");

		intervalID=setTimeout(
			function() {
				popup.fadeIn(300);
			}, 100);
	},

	function () {
		$(".m-menu .slide .m-menu--dd").fadeOut(300);
		clearInterval(intervalID);
	}
	);
}