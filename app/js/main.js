
$(document).ready(function(){


  $('.select-1').ikSelect({
    autoWidth: false,
        ddFullWidth: false
  });

  $('.mh-1').matchHeight();
  $('.catalog-wrapp-item').matchHeight();
// $('#slider-1').bxSlider({
// 		controls: true, 
// 		pager: false,
// 		slideWidth: 940,
// 		minSlides: 4,
// 		maxSlides: 4,
// 		moveSlides: 1
// 	});

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  center: true,
  autoHeight: true,
  touchDrag: false,
  mouseDrag: false,
  dotsEach: true,
  responsiveClass:true,
  responsiveClass:true,
  navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
  responsive:{
    0:{
      stagePadding: 0,
      items:1
    },
    600:{
      stagePadding: 100,
      items:1
    },
    1000:{
      stagePadding: 200,
      items:1
    }
  }
});




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