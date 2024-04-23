var ChartColor = ["#5D62B4", "#54C3BE", "#EF726F", "#F9C446", "rgb(93.0, 98.0, 180.0)", "#21B7EC", "#04BCCC"];
var primaryColor = getComputedStyle(document.body).getPropertyValue('--primary');
var secondaryColor = getComputedStyle(document.body).getPropertyValue('--secondary');
var successColor = getComputedStyle(document.body).getPropertyValue('--success');
var warningColor = getComputedStyle(document.body).getPropertyValue('--warning');
var dangerColor = getComputedStyle(document.body).getPropertyValue('--danger');
var infoColor = getComputedStyle(document.body).getPropertyValue('--info');
var darkColor = getComputedStyle(document.body).getPropertyValue('--dark');
var lightColor = getComputedStyle(document.body).getPropertyValue('--light');

(function($) {
  'use strict';
  $(function() {
    var body = $('body');
    var contentWrapper = $('.content-wrapper');
    var scroller = $('.container-scroller');
    var footer = $('.footer');
    var sidebar = $('.sidebar');

    // Remove the following line to hide the image in the sidebar
    $('.sidebar .user-profile img').removeClass('img-xs rounded-circle');

    // Add active class to nav-link based on url dynamically
    function addActiveClass(element) {
      console.log(element);
      if (current === "") {
        if (element.attr('href').indexOf("index.html") !== -1) {
          element.parents('.nav-item').last().addClass('active');
          if (element.parents('.sub-menu').length) {
            element.closest('.collapse').addClass('show');
            element.addClass('active');
          }
        }
      } else {
        if (element.attr('href').indexOf(current) !== -1) {
          element.parents('.nav-item').last().addClass('active');
          if (element.parents('.sub-menu').length) {
            element.closest('.collapse').addClass('show');
            element.addClass('active');
          }
          if (element.parents('.submenu-item').length) {
            element.addClass('active');
          }
        }
      }
    }

    var current = location.pathname.split("/").slice(-1)[0].replace(/^\/|\/$/g, '');
    $('.nav li a', sidebar).each(function() {
      var $this = $(this);
      addActiveClass($this);
    });
    $('.horizontal-menu .nav li a').each(function() {
      var $this = $(this);
      addActiveClass($this);
    });

    // Close other submenu in sidebar on opening any
    sidebar.on('show.bs.collapse', '.collapse', function() {
      sidebar.find('.collapse.show').collapse('hide');
    });

    // Change sidebar and content-wrapper height
    function applyStyles() {
      console.log(body);
      if (body.hasClass("sidebar-fixed")) {
        var fixedSidebarScroll = new PerfectScrollbar('#sidebar .nav');
      }
    }
    applyStyles();

    $('[data-toggle="minimize"]').on("click", function() {
      console.log(body);
      if ((body.hasClass('sidebar-toggle-display')) || (body.hasClass('sidebar-absolute'))) {
        body.toggleClass('sidebar-hidden');
      } else {
        body.toggleClass('sidebar-icon-only');
      }
    });

    $(".form-check label,.form-radio label").append('<i class="input-helper"></i>');

    $("#fullscreen-button").on("click", function() {
      console.log(document.fullScreenElement);
      if (!document.fullScreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
        if (document.documentElement.requestFullScreen) {
          document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
          document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (document.documentElement.msRequestFullscreen) {
          document.documentElement.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
    });

    var proBanner = document.querySelector('#proBanner');
    if (proBanner) {
      proBanner.classList.add('d-flex');
    }

    var bannerCloseButton = document.querySelector('#bannerClose');
    if (bannerCloseButton) {
        bannerCloseButton.addEventListener('click', function() {
            var proBanner = document.querySelector('#proBanner');
            if (proBanner) {
                proBanner.classList.add('d-none');
                proBanner.classList.remove('d-flex');
            }
            var pageBodyWrapper = document.querySelector('.page-body-wrapper');
            if (pageBodyWrapper) {
                pageBodyWrapper.classList.add('proBanner-padding-top');
            }
            var navbar = document.querySelector('.navbar');
            if (navbar) {
                navbar.classList.add('fixed-top');
                navbar.classList.remove('pt-5');
                navbar.classList.remove('mt-3');
            }
            var date = new Date();
            date.setTime(date.getTime() + 24 * 60 * 60 * 1000); // 24 hours from now
            $.cookie('purple-free-banner', "true", { expires: date });
        });
    }
  });
})(jQuery);
