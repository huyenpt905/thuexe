// Add the following code if you want the name of the file appear on select
// $(".custom-file-input").on("change", function() {
//     var fileName = $(this).val().split("\\").pop();
//     $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
// });




// owl
$(".section-g-carousel").owlCarousel({
    autoplay: true,
    loop:true,
    dots: true,
    mouseDrag: true,
    items: 3,
    nav:true,
    navText: ["<i class='fa fa-chevron-right' aria-hidden='true'></i>",
              "<i class='fa fa-chevron-left aria-hidden='true'></i>"],
    responsive: {0:{items:1}, 768:{items:2}, 992:{items:3}}
});

// $(".img-carousel").owlCarousel({
//     // autoplay: true,
//     loop:true,
//     dots: true,
//     mouseDrag: true,
//     items: 1,
//     // responsive: {0:{items:1}, 768:{items:2}, 992:{items:3}}
// });


// jq mai
jQuery(document).ready(function($) {



    $('.popup__danhgia-close i').click(function(event) {
        /* Act on the event */
        $('.popup__danhgia').css('display','none');
    });
});
$(document).ready(function() {
    $('.pgwSlider').pgwSlider({
      autoSlide:true
    });
});
//an hien Form Sign
jQuery(document).ready(function($) {
    $('#collapsibleNavbar ul .nav-item:last-child a').click(function(event) {
        /* Act on the event */
        event.preventDefault();
        $('section').css('opacity','0.5');
        $('.form-sign').css('display','block');
    });
    $('.form-sign-close').click(function(event) {
        /* Act on the event */
        $('section').css('opacity','1');
        $('.form-sign').css('display','none');
    });
});
jQuery(document).ready(function(event) {
    new WOW().init();
});

jQuery(document).ready(function() {
  var offset = 220;
  var duration = 500;
  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > offset) {
      jQuery('.back-to-top').fadeIn(duration);
    } else {
      jQuery('.back-to-top').fadeOut(duration);
    }
  });
  jQuery('.back-to-top').click(function(event) {
    event.preventDefault();
    jQuery('html, body').animate({
      scrollTop: 0
    }, duration);
    return false;
  })
});
jQuery(document).ready(function($) {
  jQuery(window).scroll(function(event) {
    /* Act on the event */
    if(jQuery(this).scrollTop() > 300){
      $('header').addClass('header-fix');
    }
    else{
      $('header').removeClass('header-fix');
    }
  });
});

//popup thong bao
jQuery(document).ready(function($) {
  $('.booked__btn').click(function(event) {
    /* Act on the event */
    $('.popup__thongbao').toggleClass('booked__hien');
   
  });

  $('.popup__thongbao button').click(function(event) {
    /* Act on the event */
    $('.popup__thongbao').removeClass('booked__hien');
  });
});
jQuery(document).ready(function($) {
  $('.schedule__form .row .form-group:nth-child(2) select ').click(function(event) {
    /* Act on the event */
      $('.schedule__form .row .form-group:nth-child(3)').toggleClass('.form-group-hien');
  });
  // var x = document.getElementsByTagName('.schedule__form .row .form-group:nth-child(2) select option')[0].attributes[0].value;
  // console.log(x);

});

//OWER
jQuery(document).ready(function($) { 
  // document.getElementsByTagName(".show-search .owner__btn animateu").innerHTML = "Ẩn!";
  $('.info-owner-row .owner__btn').click(function(event) {
    event.preventDefault();
    $('.owner__item-detail').toggleClass('owner__item-detail-hien');
    var x = document.getElementsByClassName("info-owner-button-text");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].innerHTML = "Ẩn!";
    };
    });
    if( $('.owner__item-detail').hasClass('owner__item-detail-hien')) {
        console.log('ts');
      }
});
jQuery(document).ready(function($) {
  $('.dinhvi').click(function(event) {
    event.preventDefault();
    $('.map').css('display','block');
  });
  $('.map i').click(function(event) {
    /* Act on the event */
    $('.map').css('display','none');
    
  });
 
});