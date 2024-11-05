(function ($) {
  'use strict';

  /*--
        Custom script to call Background
        Image & Color from html data attribute
    -----------------------------------*/
  $('[data-bg-image]').each(function () {
    var $this = $(this),
      $image = $this.data('bg-image');
    $this.css('background-image', 'url(' + $image + ')');
  });
  $('[data-bg-color]').each(function () {
    var $this = $(this),
      $color = $this.data('bg-color');
    $this.css('background-color', $color);
  });

  //Submenu Dropdown Toggle
  if ($('.main-header li.dropdown ul').length) {
    $('.main-header li.dropdown').append(
      '<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>'
    );

    //Dropdown Button
    $('.main-header li.dropdown .dropdown-btn').on('click', function () {
      $(this).prev('ul').slideToggle(500);
    });

    //Disable dropdown parent link
    $(
      '.main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a'
    ).on('click', function (e) {
      e.preventDefault();
    });
  }

  // Banner Carousel
  if ($('.main-slider-carousel').length) {
    $('.main-slider-carousel').owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      smartSpeed: 0,
      autoplay: 6000,
      autoplayTimeout: 700000,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 1,
        },
        1024: {
          items: 1,
        },
      },
    });
  }

  //Custom Seclect Box
  if ($('.custom-select-box').length) {
    $('.custom-select-box')
      .selectmenu()
      .selectmenu('menuWidget')
      .addClass('overflow');
  }

  // Single Item Carousel
  if ($('.single-item-carousel').length) {
    $('.single-item-carousel').owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      smartSpeed: 500,
      autoplay: 6000,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 1,
        },
        1024: {
          items: 1,
        },
        1200: {
          items: 1,
        },
        1500: {
          items: 1,
        },
      },
    });
  }

  // Testimonial Carousel
  if ($('.testimonial-carousel').length) {
    $('.testimonial-carousel').owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      smartSpeed: 500,
      autoplay: 6000,
      navText: [
        '<span class="icofont-thin-left"></span>',
        '<span class="icofont-thin-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 2,
        },
        1024: {
          items: 2,
        },
        1200: {
          items: 2,
        },
        1500: {
          items: 2,
        },
      },
    });
  }

  // Sponsors Item Carousel
  if ($('.sponsors-carousel').length) {
    $('.sponsors-carousel').owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      smartSpeed: 500,
      autoplay: 2000,
      navText: [
        '<span class="ti-angle-left"></span>',
        '<span class="ti-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 2,
        },
        480: {
          items: 3,
        },
        600: {
          items: 4,
        },
        800: {
          items: 5,
        },
        1024: {
          items: 5,
        },
      },
    });
  }

  //Accordion Box
  if ($('.accordion-box').length) {
    $('.accordion-box').on('click', '.acc-btn', function () {
      var outerBox = $(this).parents('.accordion-box');
      var target = $(this).parents('.accordion');

      if ($(this).hasClass('active') !== true) {
        $(outerBox).find('.accordion .acc-btn').removeClass('active');
      }

      if ($(this).next('.acc-content').is(':visible')) {
        return false;
      } else {
        $(this).addClass('active');
        $(outerBox).children('.accordion').removeClass('active-block');
        $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
        target.addClass('active-block');
        $(this).next('.acc-content').slideDown(300);
      }
    });
  }

  //Header Search
  if ($('.search-box-outer').length) {
    $('.search-box-outer').on('click', function () {
      $('body').addClass('search-active');
    });
    $('.close-search').on('click', function () {
      $('body').removeClass('search-active');
    });
  }

  //Gallery Filters
  if ($('.filter-list').length) {
    $('.filter-list').mixItUp({});
  }

  //LightBox / Fancybox
  if ($('.lightbox-image').length) {
    $('.lightbox-image').fancybox({
      openEffect: 'fade',
      closeEffect: 'fade',
      helpers: {
        media: {},
      },
    });
  }

  //Contact Form Validation
  // if($('#contact-form').length){
  // 	$('#contact-form').validate({
  // 		rules: {
  // 			phone: {
  // 				required: true
  // 			},
  // 			email: {
  // 				required: true,
  // 				email: true
  // 			},
  // 			message: {
  // 				required: true
  // 			}
  // 		}
  // 	});
  // }

  // Scroll to a Specific Div
  if ($('.scroll-to-target').length) {
    $('.scroll-to-target').on('click', function () {
      var target = $(this).attr('data-target');
      // animate
      $('html, body').animate(
        {
          scrollTop: $(target).offset().top,
        },
        1500
      );
    });
  }

  // Elements Animation
  if ($('.wow').length) {
    var wow = new WOW({
      boxClass: 'wow', // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
    });
    wow.init();
  }

  /*-------------------------
        Ajax Contact Form 
    ---------------------------*/
  $(function () {
    // Get the form.
    var form = $('#contact-form');

    // Get the messages div.
    var formMessages = $('.form-messege');

    // Set up an event listener for the contact form.
    $(form).submit(function (e) {
      // Stop the browser from submitting the form.
      e.preventDefault();

      // Serialize the form data.
      var formData = $(form).serialize();

      // Submit the form using AJAX.
      $.ajax({
        type: 'POST',
        url: $(form).attr('action'),
        data: formData,
      })
        .done(function (response) {
          // Make sure that the formMessages div has the 'success' class.
          $(formMessages).removeClass('error');
          $(formMessages).addClass('success');

          // Set the message text.
          $(formMessages).text(response);

          // Clear the form.
          $('#contact-form input,#contact-form textarea').val('');
        })
        .fail(function (data) {
          // Make sure that the formMessages div has the 'error' class.
          $(formMessages).removeClass('success');
          $(formMessages).addClass('error');

          // Set the message text.
          if (data.responseText !== '') {
            $(formMessages).text(data.responseText);
          } else {
            $(formMessages).text(
              'Oops! An error occured and your message could not be sent.'
            );
          }
        });
    });
  });

  /* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */

  /* ==========================================================================
   When document is loading, do
   ========================================================================== */
})(window.jQuery);
