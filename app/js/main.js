





$(document).ready(function(){








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


// $('#slider-1').bxSlider({
// 		controls: true, 
// 		pager: false,
// 		slideWidth: 940,
// 		minSlides: 4,
// 		maxSlides: 4,
// 		moveSlides: 1
// 	});






 //    $("a.modal-form").fancybox({
 //       'hideOnContentClick': true,
 //          minWidth : 230,
 //          padding : 0,
 //          closeBtn : true
 
 // });

// $('header a[href^="#"]').on('click', function(event) {

//     var target = $( $(this).attr('href') );

//     if( target.length ) {
//         event.preventDefault();
//         $('html, body').animate({
//             scrollTop: target.offset().top -85
//         }, 600);
//     }

// });



//  jQuery(function($){ 
//    $(".phone_mask_1").mask("+7(999) 999-9999");
//    $("#phone_mask_2").mask("+7(999) 999-9999");
// });

$('input,textarea').focus(function(){
	$(this).data('placeholder',$(this).attr('placeholder'))
	.attr('placeholder','');
}).blur(function(){
	$(this).attr('placeholder',$(this).data('placeholder'));
});

});








$(window).on('load', function() {

	footerHeight();

});

$(window).resize(function(){
	footerHeight();
})





// count footer height to pos bottom 
function footerHeight () {
	var footerHeight = $('.footer').outerHeight(),
	bodyHeight = $('.wrapper-p').outerHeight();

	$('.wrapper-p').css('paddingBottom', footerHeight);

};