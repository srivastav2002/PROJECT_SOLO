/*======================  preloader ==========================*/

$(window).on('load', function(){ // make sure that whole site is loaded
   $('#status').fadeOut();
   $('#preloader').delay(350).fadeOut('slow');
})


/*====================== navigation ===============*/

/* show and hide white navigation */
$(function(){

   // show and hide nav on page load
     showHideNav();

   $(window).scroll(function(){

      // show/hide nav on window scroll
      showHideNav();
   });

   function showHideNav(){

      if($(window).scrollTop() > 50) {
         // show white nav
         $("nav").addClass("white-nav-top");

         // show dark logo
         $(".navbar-brand img").attr("src", "../project solo 2/Code/img/logo/logo-dark.png");

         // show back to top button
         $("#back-to-top").fadeIn();

      }else{

         // hide white nav
         $("nav").removeClass("white-nav-top");

         // show logo
         $(".navbar-brand img").attr("src", "../project solo 2/Code/img/logo/logo.png");

         //hide back to top button
         $("#back-to-top").fadeOut();

      };
   };
   
});  

// smooth scrolling

$(function(){
   $("a.smooth-scroll").click(function(event){

      event.preventDefault();

      //get section id like #about # home etc.
      var section_id = $(this).attr("href");

      $("html, body").animate({
         scrollTop: $(section_id).offset().top - 64
      }, 1250, "easeInOutExpo");
   });
});


/* =====  mobile menu  ==== */

$(function(){

   // show mobile nav
   $("#mobile-nav-open-btn").click(function (){

       $("#mobile-nav").css("height" , "100%");
      
   });

   // hide mobile nav
   $("#mobile-nav-close-btn , #mobile-nav a").click(function(){
     
      $("#mobile-nav").css("height" , "0%");

   });
});











/*====================== Animation ===============================*/

//animate on scroll
$(function(){
   new WOW().init();
});

//how animate on page load
$(window).on('load' , function (){
   $("#home-heading-1").addClass("animated-fadeInDown");
   $("#home-heading-2").addClass("animated-fadeInLeft");
   $("#home-text").addClass("animated zoomIn");
   $("#home-btn").addClass("animated zoomIn");
   $("#arrow-down i").addClass("animated fadeInDown");
});

/*============= team ======================*/

$(function(){
   $("#team-members").owlCarousel({
      items: 2,
      autoplay: true,
      smartSpeed: 700,
      loop: true,
      autoplayHoverPause: true,
      nav: true,
      dots: false,
      navText: [' <i class="fa fa-angle-left"></i>' ,  ' <i class="fa fa-angle-right"></i>' ],
      responsive: {
         // breakpoint from 0 up 
         0: {
            items:1
         },

         // breakpoint from 480 up 
         480: {
            items:2
         }
      }

   })
})

/*=============== progress bar===================*/

$(function (){
   $("#progress-element").waypoint(function(){

      $(".progress-bar").each(function(){

         $(this).animate({
            width: $(this).attr("aria-valuenow") + "%"
         },2000);
      });

      this.destroy();
   }, {
      offset: "bootom-in-view"  

   });
});

/*==== responsive tabs =========*/

$(function (){
   $("#services-tabs").responsiveTabs({
      animation: 'slide'
   });
});



/*=========== portfolio ==============*/

$(window).on('load' , function() {

   // initialize isotope
   $("#isotope-container").isotope({});

   //filter item on button click
   $("#isotope-filters").on('click','button', function () {

      //get filter value
      var filterValue = $(this).attr('data-filter');

      //filter portfolio
      $("#isotope-container").isotope({
         filter: filterValue
      });

      //active button

      $("#isotope-filters").find('.active').removeClass('active');
      $(this).addClass('active');
   });

});

/* ================== testimonial ============= */

$(function(){
   $("#testimonial-slider").owlCarousel({
      items: 1,
      autoplay: false,
      smartSpeed: 700,
      loop: true,
      autoplayHoverPause: true,
      nav: true,
      dots: false,
      navText: [' <i class="fa fa-angle-left"></i>' ,  ' <i class="fa fa-angle-right"></i>' ],
     
   })
})

/* ========== stats ============ */

$(function (){
   $(".counter").counterUp({
      delay: 10,
      time: 2000
   });
});

/*===========  clients ================*/

$(function(){
   $("#clients-list").owlCarousel({
      items: 6,
      autoplay: false,
      smartSpeed: 700,
      loop: true,
      autoplayHoverPause: true,
      nav: true,
      dots: false,
      navText: [' <i class="fa fa-angle-left"></i>' ,  ' <i class="fa fa-angle-right"></i>' ],
      responsive: {
         // breakpoint from 0 up 
         0: {
            items:2
         },

         // breakpoint from 480 up 
         480: {
            items:3
         },

          // breakpoint from 768 up 
          768: {
            items:6
         }
      }

   })
})

/*============ google map ==================*/

$(window).on('load', function(){

      // map variables
       var  addressString = '230 Broadway , New  ';
       var myLating = {
         lat: 0,
         lng: 0
      };

      // 1. render map
       var map = new google.maps.Map(document.getElementById('map'), {
         zoom: 11,
         center: myLating
      });

      // 2. add marker
       var marker = new google.maps.Marker({
         position:myLating,
         map: map,
         title: "Click To See Address"

      });

      // 3. add info window
       var infowindow = new google.maps.infowindow({
         content: addressString
       });

    // show info window when user clicks marker
     marker.addListener('click' , function (){
         infowindow.open(map, marker);
       });

      // 4. resize function
      google.maps.event.addDomListener(window, 'resize', function(){

         var center = map.getcenter();
         google.maps.event.trigger(map, 'resize');
         map.setCenter(center);
       });
       
});






