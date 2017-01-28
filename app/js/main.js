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



	$('body').on('click', 'a.disabled', function (e) {
		e.preventDefault();
	})


	
	$('.filter-caption-wrap').on('click', '.filter-caption-item:not(.active)', function(e) {
		e.preventDefault();
		$(this).addClass('active')
		.siblings().removeClass('active')
		.closest('.main-filter').find('.filter-prop-wrap').removeClass('active').css({opacity: '0',display: 'none'}).eq($(this).index()).addClass('active').css('display', 'block').animate({opacity: '1'}, 300);

	})

	$('.top-tabs-caption').on('click', 'li:not(.active)', function() {
		$(this)
		.addClass('active').siblings().removeClass('active')
		.closest('div.top-tabs').find('.top-tabs-content').removeClass('active').css({opacity: '0',display: 'none'}).eq($(this).index()).addClass('active').css('display', 'block').animate({opacity: '1'}, 300);

	})

	$('.top-tabs-caption').on('click', 'a', function(e) {
		e.preventDefault();
	});




	



	$(document).on('click', '.catalog-wrapp-item:not(.add)', function(e) {
		e.preventDefault(); 


		if ($('.catalog-wrapp-item.add').length) {

			$($('.js-find-row').children('.hide-content').find('.slider-bg')).slick('unslick');
			$($('.js-find-row').children('.hide-content').find('.slider-nav')).slick('unslick');


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
		$(this).addClass('add');
		$(this).next().css('opacity', '0');
		var content = $(this).next();
		lastElement.after(content);
		content.animate({
			opacity: '1'
		},300);

		// $('html, body').animate({
  //       scrollTop: $($('.js-find-row').children('.hide-content')).offset().top -70
  //   }, 500);


// Слайдер каталог
$($('.js-find-row').children('.hide-content').find('.slider-bg')).slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	dots: false,
	fade: true,
	asNavFor: $('.js-find-row').children('.hide-content').find('.slider-nav')
});
$($('.js-find-row').children('.hide-content').find('.slider-nav')).slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	arrows: true,
	asNavFor: $('.js-find-row').children('.hide-content').find('.slider-bg'),
	dots: false,
	centerMode: false,
	focusOnSelect: true
});







});




	$('.catalog-wrapp-item').on('click', '.rate > *, .size-m, .calc-res *', function(e) {
		e.stopPropagation();
	});


	$(document).on('click', '.icon-close-content', function(e) {
		e.preventDefault(); 

		$($('.js-find-row').children('.hide-content').find('.slider-bg')).slick('unslick');
		$($('.js-find-row').children('.hide-content').find('.slider-nav')).slick('unslick');

		$('.catalog-wrapp-item.add').after($('.item-c + .hide-content'));
		$('.catalog-wrapp-item').removeClass('add');


		

	});



	// $('.ik_select_option').each(function() {
	// 	numb2 = $(this).text().length-1;
	// 	lastS2 = $(this).text().charAt(numb2);
	// 	console.log(lastS2);
	// 	var str2 = $(this).text().slice(0, -1);
	// 	$(this).find('span').html(str2 + '<sub>' +lastS2+'</sub>');
	// }); 

// last SYMBOL
function changeLastSymbol(wrappFake, optionAndIkSelText) {

	$(wrappFake).find((optionAndIkSelText)).each(function() {

		lastNumber = $(this).text().length-1;
		lastSymbol = $(this).text().charAt(lastNumber);
		console.log(lastSymbol);
		str = $(this).text().slice(0, -1);
		console.log(str + '<b>' +lastSymbol+'</b>');
		$(this).html(str + '<sub>' +lastSymbol+'</sub>')

	});


}

$(document).on('click', '.js-arrow-css-dd .ik_select_option', function() {
	changeLastSymbol('.js-arrow-css', '.ik_select_link_text');
});

$('.select-arr-js').ikSelect({
	customClass: 'js-arrow-css',
	autoWidth: false,
	onInit: function (inst) {
		changeLastSymbol('.js-arrow-css', '.ik_select_link_text');
	},
	onShow: function (inst) {
		changeLastSymbol('.js-arrow-css-dd', '.ik_select_option');	
		changeLastSymbol('.js-arrow-css', '.ik_select_link_text');
	},
	onKeyUp: function (inst) {
		changeLastSymbol('.js-arrow-css', '.ik_select_link_text');
	},
	ddFullWidth: false
});


$('.select-1').ikSelect({
	customClass: '',
	autoWidth: false,
	ddFullWidth: false
});







$('.mh-1').matchHeight();
$('.catalog-wrapp-item').matchHeight();
$('.wrapp-p').matchHeight({
	byRow: false 
})

$('.mh-2').matchHeight();

$('.top-tabs-content').matchHeight({
	byRow: false 
})







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














$("body").on('click', '.js-dd-click-btn', function (e) {
	e.preventDefault();



	if($(this).closest('.js-dd-click-wrap').is('.open')) {
		$(this).next('.js-dd-click').fadeOut(300).closest('.js-dd-click-wrap').removeClass('open');
	} else {
		$('.js-dd-click-wrap.open').removeClass('open').find('.js-dd-click').fadeOut(300);


		if($(this).parents('.carousel').length) {
			$(this).next('.js-dd-click').fadeIn(300).closest('.js-dd-click-wrap').addClass('open');

			var posTop = $(this).closest('td').position().top,
			thisHeight = $(this).next('.js-dd-click').outerHeight(),
			parentHeight = $(this).closest('.carousel').outerHeight(),
			posOffsetLeft = $(this).next('.js-dd-click').offset().left;

			if((posTop + thisHeight + 30) > parentHeight ) {
				$(this).next('.js-dd-click').addClass('up');
			}

			if(posOffsetLeft < 0) {
				$(this).next('.js-dd-click').addClass('center');
			} else {
				$(this).next('.js-dd-click').removeClass('center');
			}


		} else {
			$(this).next('.js-dd-click').fadeIn(300).closest('.js-dd-click-wrap').addClass('open');
		}
	}

});



// обработка клика по странице (для скрытия меню, popup и тд)
$(document).click( function(event){
	if( $(event.target).closest(".js-dd-click-wrap").length )
		return;

	$('.js-dd-click').fadeOut(300).closest('.js-dd-click-wrap').removeClass('open');

	
	event.stopPropagation();
	
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
	calcRes()
	symbolCount()



	if($('.countdown').length){
		$('.countdown').each(function() {
          var dateArr = $(this).data('date');//параметр из атрибута data
          var re = /\s*,\s*/; //регулярка для разбивания строки на массив
          
          dateArr = dateArr.split(re);//массив даты
          
          dateArr[1] = parseInt(dateArr[1], 10) - 1;
          
          var countDate = new Date(
              dateArr[0], //год
              dateArr[1], //месяц
              dateArr[2], //день
              dateArr[3], //час
              dateArr[4] //минуты
              );
          
          
          $(this).countdown({
          	until: countDate,
          	padZeroes: true,
          	compact: true,
          	format: 'HMS'
          });
        })
	}


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



$(".top-tabs-item a").hover(function () {

	$(this).addClass('active');
}, function () {
	$(this).removeClass('active');
});

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



// поля с кнопками плюс/минус
function calcRes() {
	$('.calc-res').each(function() {
		var $input = $(this).find('.calc-field');
		$input.closest('.calc-res:not(.disabled)').on('click', '.calc-minus', function() {
			var data = $input.val();

			if(data >1) {
				$input.val(parseInt(data) - 1);
			}

		});

		$input.closest('.calc-res:not(.disabled)').on('click', '.calc-plus', function() {
			var data = $input.val();
			$input.val(parseInt(data) + 1 );

		});
	});
}

function calcProverka(input) { 
	input.value = input.value.replace(/[^\d,]/g, '0');
};








// textarea
function symbolCount(){
	$(".symbol-count").keyup(function()
	{
		var thisElem = $(this).closest('.symbol-count-wrap'),
		elemVal = $(this).val(),
		elemLength = $(this).attr('maxlength') - elemVal.length;

		if(elemLength >= 0) {
			thisElem.find('.symbol-count-num').html(elemLength);
		} else {
			return false;
		}

	});

}