(function($) {
"use strict";

/*------------------------------------------------------------------
[Table of contents]

EFY ACCORDION CUSTOM JS
EFY CAUSES BANNER SLIDER JS
EFY CAUSES THREE ITEM SLIDER JS
EFY CAUSES GALLEY SLIDER JS
EFY CLIENT SLIDER JS
EFY BLOG SLIDER JS
EFY TESTIMONIAL 2 SLIDER JS
EFY MAGNIFIC POPUP JS
EFy GALLERY POPUP JS
EFY EASYPIE CHART JS
EFY CAUSES HOME PERCENTAGE JS
EFY APPEAR COUNTER JS
EFY SHOP INCR BTN JS
Efy SHOP SYNC SLIDER JS
EFY INNER PAGE SYNC SLIDER JS
EFY GALLERY FILTER JS
EFY GOOGLE MAP JS

-------------------------------------------------------------------*/

/*--------------------------------------------------------------
CUSTOM PRE DEFINE FUNCTION
------------------------------------------------------------*/
/* is_exist() */
jQuery.fn.is_exist = function(){
  return this.length;
}





$(function(){

/*--------------------------------------------------------------
EFY ACCORDION CUSTOM JS
--------------------------------------------------------------*/
$('#efy_accordion_waraper').on('show.bs.collapse', function(e) {
  var closest = e.target.closest('.card');
  $(closest).addClass('card__active').siblings().removeClass('card__active');
})

/*--------------------------------------------------------------
EFY CAUSES BANNER SLIDER JS
--------------------------------------------------------------*/
var efy_banner_slider = $('.efy_banner_slider');
  if (efy_banner_slider.is_exist()) {
      efy_banner_slider.owlCarousel({
      loop:true,
      margin:30,
      nav:true,
      dots:false,
      animateOut: 'fadeOut',
      autoplay:true,
      autoplayTimeout:3000,
      items:1,
      navText: ["<i class=\"icon icon-ar-right\"></i>",
        "<i class=\"icon icon-ar-left\"></i>"],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          768:{
              items:1 
          },
          1000:{
              items:1
          }
      }
  });

  efy_banner_slider.on('changed.owl.carousel', function(event) {
    var item = event.item.index - 2;     // Position of the current item

    $('.animation-1').removeClass('animated fadeInDown');
    $('.owl-item').not('.cloned').eq(item).find('.animation-1').addClass('animated fadeInDown');

    $('.animation-2').removeClass('animated fadeInUp');
    $('.owl-item').not('.cloned').eq(item).find('.animation-2').addClass('animated fadeInUp');

  });

}


/*--------------------------------------------------------------
EFY CAUSES THREE ITEM SLIDER JS
--------------------------------------------------------------*/
var efy_three_item_slider = $('.efy_three_item_slider');
  if (efy_three_item_slider.is_exist()) {
      efy_three_item_slider.owlCarousel({
      loop:true,
      margin:30,
      nav:true,
      dots:false,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      items:3,
     navText: ["<i class=\"icon icon-ar-right\"></i>",
        "<i class=\"icon icon-ar-left\"></i>"],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          768:{
              items:1 
          },
          1000:{
              items:3
          }
      }
  });

}

/*--------------------------------------------------------------
EFY CAUSES GALLEY SLIDER JS
--------------------------------------------------------------*/
var efy_gallery_slider = $('.efy_gallery_slider');
  if (efy_gallery_slider.is_exist()) {
      efy_gallery_slider.owlCarousel({
      loop:true,
      margin:0,
      nav:true,
      dots:false,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      items:4,
      navText: ["<i class=\"icon icon-ar-right\"></i>",
        "<i class=\"icon icon-ar-left\"></i>"],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          768:{
              items:1 
          },
          1000:{
              items:4
          }
      }
  });

}

/*--------------------------------------------------------------
EFY  CLIENT SLIDER JS
--------------------------------------------------------------*/
var efy_client_slider = $('.efy_client_slider');
  if (efy_client_slider.is_exist()) {
      efy_client_slider.owlCarousel({
      loop:true,
      margin:30,
      nav:false,
      dots:false,
      autoplay:true,
	   autoplayTimeout:3000,
	  autoplayHoverPause:false,
      items:4,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          768:{
              items:1 
          },
          1000:{
              items:4
          }
      }
  });

}

/*--------------------------------------------------------------
EFY BLOG SLIDER JS
--------------------------------------------------------------*/
var efy_blog_slider = $('.efy_blog_slider');
  if (efy_blog_slider.is_exist()) {
      efy_blog_slider.owlCarousel({
       stagePadding: 280,
	    loop:true,
	    margin:30,
	    nav:false,
	    autoplay:true,
		  autoplayTimeout:5000,
		  autoplayHoverPause:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:3
	        }
	    }
  });

}

/*--------------------------------------------------------------
EFY TESTIMONIAL 2 SLIDER JS
--------------------------------------------------------------*/
var efy_testimonial_2_slider = $('.efy_testimonial_2_slider');
  if (efy_testimonial_2_slider.is_exist()) {
      efy_testimonial_2_slider.owlCarousel({
      loop:true,
      margin:0,
      nav:true,
      dots:false,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      items:1,
      navText: ["<i class=\"icon icon-ar-right\"></i>",
        "<i class=\"icon icon-ar-left\"></i>"],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          768:{
              items:1 
          },
          1000:{
              items:1
          }
      }
  });

}

/*--------------------------------------------------------------
EFY MAGNIFIC POPUP JS
------------------------------------------------------------*/
var efy_popup_youtube = $('.efy_popup_youtube');
  if (efy_popup_youtube.is_exist()){
      efy_popup_youtube.magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade'
  });

}

/*--------------------------------------------------------------
EFy GALLERY POPUP JS
------------------------------------------------------------*/
var efy_img_popup = $('.efy_zoom_gallery');
if(efy_img_popup.is_exist()){
  $(efy_img_popup).magnificPopup({
      // delegate: 'a',
      type: 'image',
      closeOnContentClick: false,
      closeBtnInside: false,
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      image: {
        verticalFit: true,
        titleSrc: function(item) {
        return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
        }
      },
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 300, // don't foget to change the duration also in CSS
        opener: function(element) {
        return element.find('img');
        }
      }

  });
}

/*--------------------------------------------------------------
EFY EASYPIE CHART JS
-------------------------------------------------------------*/
var efy_chart = $('.chart');
	if(efy_chart.is_exist()){
	$(efy_chart).easyPieChart({
	  easing: 'easeOutElastic',
	  delay:0,
	  barColor: '#fff',
	  trackColor: '#333',
	  scaleColor: false,
	  lineWidth: 5,
	  trackWidth: 5,
	  lineCap: '',
	  onStep: function(from, to, percent) {
	    $(this.el).find('.percent').text(Math.round(percent));
	  }
	});
}

/*------------------------------------------------------------
EFY CAUSES HOME PERCENTAGE JS
------------------------------------------------------------*/
var efy_causes_home_percentage = $('.efy_causes_home_percentage');
	  if (efy_causes_home_percentage.is_exist()) {
	  var number_percentage = $(".efy_causes_home_percentage");
	    number_percentage.appear();
	    $(document.body).on('appear', '.efy_number_count', function () {
	      number_percentage.each(function () {
	        $(this).animateNumbers($(this).attr("data-value"), true, parseInt($(this).attr("data-animation-duration"), 10));
	        var value = $(this).attr("data-value");
	        var duration = $(this).attr("data-animation-duration");
	        $(this).closest('.efy_causes_single_meta').find('.efy_skill_count_01 .efy_skill_count_02').animate({width : value+'%'}, 4500);
	      });
	  });

	var appear = $('.appear');
	appear.appear();
	$.fn.animateNumbers = function (stop, commas, duration, ease) {
	  return this.each(function () {
	    var $this = $(this);
	    var start = parseInt($this.text().replace(/,/g, ""), 10);
	    commas = (commas === undefined) ? true : commas;
	    $({
	      value: start
	    }).animate({
	        value: stop
	      }, {
	        duration: duration == undefined ? 500 : duration,
	        easing: ease == undefined ? "swing" : ease,
	        step: function () {
	          $this.text(Math.floor(this.value));
	          if (commas) {
	            $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
	          }
	        },
	        complete: function () {
	          if (parseInt($this.text(), 10) !== stop) {
	            $this.text(stop);
	            if (commas) {
	              $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
	            }
	          }
	        }
	      });
	  });
	}
  }

/*--------------------------------------------------------------
EFY APPEAR COUNTER JS
--------------------------------------------------------------*/
var efy_appear_counter = $('#efy_counter');
  if(efy_appear_counter.is_exist()){
      var a = 0;
      $(window).scroll(function() {

        var oTop = $(efy_appear_counter).offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          $('.counter-result').each(function() {
            var $this = $(this),
              countTo = $this.attr('data-percentage');
            $({
              countNum: $this.text()
            }).animate({
                countNum: countTo
              },

              {

                duration: 4000,
                easing: 'swing',
                step: function() {
                  $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                  $this.text(this.countNum);
                  //alert('finished');
                }

              });
          });
          a = 1;
        }

      });
}


/*--------------------------------------------------------------
EFY SHOP INCR BTN JS
------------------------------------------------------------*/
var shop_single = $('.incr-btn');
if(shop_single.is_exist()){
     $(".incr-btn").on("click", function (e) {
        var $button = $(this);
        var oldValue = $button.parent().find('.quantity').val();
        $button.parent().find('.incr-btn[data-action="decrease"]').removeClass('inactive');
        if ($button.data('action') == "increase") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below 1
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
                $button.addClass('inactive');
            }
        }
        $button.parent().find('.quantity').val(newVal);
        e.preventDefault();
    });

}

/*--------------------------------------------------------------
Efy SHOP SYNC SLIDER JS
------------------------------------------------------------*/
var efy_shop_sync = $('#efy_shop_slider_1, #efy_shop_slider_2');
  if(efy_shop_sync.is_exist()){
  var sync1 = $("#efy_shop_slider_1");
  var sync2 = $("#efy_shop_slider_2");
  var slidesPerPage = 3;
  var syncedSecondary = true;

  sync1.owlCarousel({
    items : 1,
    slideSpeed : 2000,
    nav: false,
    dots: false,
    loop: true,
    responsiveRefreshRate : 200,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
  }).on('changed.owl.carousel', syncPosition);

  sync2
    .on('initialized.owl.carousel', function () {
      sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
    items : slidesPerPage,
    dots: false,
    nav: false,
    autoWidth:true,
    margin: 25,
    // center:true,
    loop:false,
    smartSpeed: 200,
    slideSpeed : 500,
    slideBy: slidesPerPage,
    responsiveRefreshRate : 100
  }).on('changed.owl.carousel', syncPosition2);

  function syncPosition(el) {
    var count = el.item.count-1;
    var current = Math.round(el.item.index - (el.item.count/2) - .5);
    
    if(current < 0) {
      current = count;
    }
    if(current > count) {
      current = 0;
    }
    
    //end block

    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync2.find('.owl-item.active').length - 1;
    var start = sync2.find('.owl-item.active').first().index();
    var end = sync2.find('.owl-item.active').last().index();
    
    if (current > end) {
      sync2.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      sync2.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }
  
  function syncPosition2(el) {
    if(syncedSecondary) {
      var number = el.item.index;
      sync1.data('owl.carousel').to(number, 100, true);
    }
  }
  
  sync2.on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).index();
    sync1.data('owl.carousel').to(number, 300, true);
  });

}

/*--------------------------------------------------------------
EFY INNER PAGE SYNC SLIDER JS
------------------------------------------------------------*/
var efy_inner_sync = $('#efy_inner_sync_slider_1, #efy_inner_sync_slider_2');
  if(efy_inner_sync.is_exist()){
    var sync1 = $("#efy_inner_sync_slider_1");
    var sync2 = $("#efy_inner_sync_slider_2");
    var slidesPerPage = 3;
    var syncedSecondary = true;

    sync1.owlCarousel({
      items : 1,
      slideSpeed : 2000,
      nav: false,
      // autoplay: true,
      dots: false,
      loop: true,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      responsiveRefreshRate : 200,
    }).on('changed.owl.carousel', syncPosition);

    sync2
      .on('initialized.owl.carousel', function () {
        sync2.find(".owl-item").eq(0).addClass("current");
      })
      .owlCarousel({
      items : slidesPerPage,
      dots: false,
      nav: true,
      margin: 25,
      // loop:true,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      smartSpeed: 200,
      slideSpeed : 500,
      slideBy: slidesPerPage, 
      responsiveRefreshRate : 100,
      navContainer: '#inner_customNav',
      navText: ["<i class=\"icon icon-ar-right\"></i>",
      "<i class=\"icon icon-ar-left\"</i>"],
    }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
      var count = el.item.count-1;
      var current = Math.round(el.item.index - (el.item.count/2) - .5);
      
      if(current < 0) {
        current = count;
      }
      if(current > count) {
        current = 0;
      }

      sync2
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
      var onscreen = sync2.find('.owl-item.active').length - 1;
      var start = sync2.find('.owl-item.active').first().index();
      var end = sync2.find('.owl-item.active').last().index();
      
      if (current > end) {
        sync2.data('owl.carousel').to(current, 100, true);
      }
      if (current < start) {
        sync2.data('owl.carousel').to(current - onscreen, 100, true);
      }
    }
    
    function syncPosition2(el) {
      if(syncedSecondary) {
        var number = el.item.index;
        sync1.data('owl.carousel').to(number, 100, true);
      }
    }
    
    sync2.on("click", ".owl-item", function(e){
      e.preventDefault();
      var number = $(this).index();
      sync1.data('owl.carousel').to(number, 300, true);
    });

}

});/*End document ready*/


$(window).on("load" ,function(){

/*--------------------------------------------------------------
EFY GALLERY FILTER JS
------------------------------------------------------------*/
var efy_filter_gallery = $('#efy_gallery_three_column');
if(efy_filter_gallery.is_exist()){
  var $container = $(efy_filter_gallery),
    colWidth = function () {
      var w = $container.width(), 
        columnNum = 1,
        columnWidth = 0;
      if (w > 1200) {
        columnNum  = 3;
      } else if (w > 900) {
        columnNum  = 3;
      } else if (w > 600) {
        columnNum  = 2;
      } else if (w > 450) {
        columnNum  = 2;
      } else if (w > 385) {
        columnNum  = 1;
      }
      columnWidth = Math.floor(w/columnNum);
      $container.find('.collection-grid-item').each(function() {
        var $item = $(this),
          multiplier_w = $item.attr('class').match(/collection-grid-item-w(\d)/),
          multiplier_h = $item.attr('class').match(/collection-grid-item-h(\d)/),
          width = multiplier_w ? columnWidth*multiplier_w[1] : columnWidth,
          height = multiplier_h ? columnWidth*multiplier_h[1]*0.4-12 : columnWidth*0.5;
        $item.css({
          width: width,
          //height: height
        });
      });
      return columnWidth;
    },
    isotope = function () {
      $container.isotope({
        resizable: false,
        itemSelector: '.collection-grid-item',
        masonry: {
          columnWidth: colWidth(),
          gutterWidth: 0
        }
      });
    };
  isotope();
  $(window).resize(isotope);
  var $optionSets = $('.watch-gallery-nav .option-set'),
      $optionLinks = $optionSets.find('li');
  $optionLinks.click(function(){
  var $this = $(this);
    var $optionSet = $this.parents('.option-set');
    $optionSet.find('.selected').removeClass('selected');
    $this.addClass('selected');

    // make option object dynamically, i.e. { filter: '.my-filter-class' }
    var options = {},
        key = $optionSet.attr('data-option-key'),
        value = $this.attr('data-option-value');
    // parse 'false' as false boolean
    value = value === 'false' ? false : value;
    options[ key ] = value;
    if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
      // changes in layout modes need extra logic
      changeLayoutMode( $this, options )
    } else {
      // creativewise, apply new options
      $container.isotope( options );
    }
    return false;
  });
}


}); // End window LODE



$(window).on("resize", function(){

}); // end window resize

/*--------------------------------------------------------------
EFY GOOGLE MAP JS
--------------------------------------------------------------*/
var google_map = $('#map');
if(google_map.is_exist()){
  google.maps.event.addDomListener(window, 'load', init);

  function init() {
    var mapOptions = {
        zoom: 11,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        disableDefaultUI: true,
        center: new google.maps.LatLng(40.6700, -73.9400), 
         styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative.neighborhood","elementType":"geometry.fill","stylers":[{"visibility":"off"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"visibility":"off"},{"weight":"0.83"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.fill","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"landscape.man_made","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f1f1f1"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#3a3a3a"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"visibility":"off"},{"color":"#e6e6e6"}]},{"featureType":"road.arterial","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#f0f0f0"}]},{"featureType":"road.arterial","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16},{"visibility":"on"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"transit","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]}]
      };
	    var mapElement = document.getElementById('map');

	    var map = new google.maps.Map(mapElement, mapOptions);

	    var marker = new google.maps.Marker({
	      position: new google.maps.LatLng(40.6700, -73.9400),
	      map: map,
	      icon: 'assets/images/map-con.png',
	      title: 'ecoiefy'
	    });
	    var contentString = '<div id="content">' +
	        '<div id="efy">' +
	        '<h3>ecoiefy' +
	        '</div>';

	    var infowindow = new google.maps.InfoWindow({
	        content: contentString,
	        maxWidth: 280
	    });

	    marker.setAnimation(google.maps.Animation.BOUNCE);
	    setTimeout(function(){ marker.setAnimation(null); }, 750);  //time it takes for one bounce   

	    google.maps.event.addListener(marker, 'click', function () {
	        infowindow.open(map, marker);
	    });

	  }

}


})(jQuery);






