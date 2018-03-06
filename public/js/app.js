$(document).ready(function(){
  "use strict";


  $("div.faq-accordion").each(function () {
    var faqId = $(this).find("div").attr('id')
    $(this).find("a.question").attr({ 'href' : '#' + faqId, 'aria-controls' : faqId, 'data-toggle' : 'collapse', 'aria-expanded' : 'false' });
  });

/** Close the main Banner at the top after you scroll down the page **/
  function checkOffset() {
    if ($("#mainNav").offset().top < 50) {
      $("img.mainLogo").addClass('top', 300);
    }
    else if(!$(window).scrollTop()) {
      $("img.mainLogo").addClass('top', 300);
    }
    else {
      $("img.mainLogo").removeClass('top', 300);
    }
  }
    checkOffset();

  $(window).scroll(function() {
    checkOffset();
  });

/** Close the main Navigation Section you've selected **/
  $("a.nav-link").click(function(){
    $(".subnav").removeClass("show");
  });


  var parallaxElementsFirst = $('.parallax-first'),
      parallaxQuantityFirst = parallaxElementsFirst.length;

  var parallaxElementsSecond = $('.parallax-second'),
      parallaxQuantitySecond = parallaxElementsSecond.length;

  var parallaxElementsThird = $('.parallax-third'),
      parallaxQuantityThird = parallaxElementsThird.length;

  var parallaxElementsFour = $('.parallax-four'),
      parallaxQuantityFour = parallaxElementsFour.length;

  var parallaxElementsFive = $('.parallax-five'),
      parallaxQuantityFive = parallaxElementsFive.length;

  var parallaxElementsSix = $('.parallax-six'),
      parallaxQuantitySix = parallaxElementsSix.length;

      $(window).on('scroll', function () {
        window.requestAnimationFrame(function () {

          for (var i = 0; i < parallaxQuantityFirst; i++) {
            var currentElement = parallaxElementsFirst.eq(i);
            var scrolled = $(window).scrollTop();
              currentElement.css({
                'transform': 'translate3d(0,' + scrolled * +0.2 + 'px, 0)'
              });
          }
          for (var i = 0; i < parallaxQuantitySecond; i++) {
            var currentElement = parallaxElementsSecond.eq(i);
            var scrolled = $(window).scrollTop();
              currentElement.css({
                'transform': 'translate3d(0,' + scrolled * +0.05 + 'px, 0)'
              });
          }
          for (var i = 0; i < parallaxQuantityThird; i++) {
            var currentElement = parallaxElementsThird.eq(i);
            var scrolled = $(window).scrollTop();
              currentElement.css({
                'transform': 'translate3d(0,' + scrolled * -0.1 + 'px, 0)'
              });
          }
          for (var i = 0; i < parallaxQuantityFour; i++) {
            var currentElement = parallaxElementsFour.eq(i);
            var scrolled = $(window).scrollTop();
              currentElement.css({
                'transform': 'translate3d(0,' + scrolled * -0.25 + 'px, 0)'
              });
          }
          for (var i = 0; i < parallaxQuantityFive; i++) {
            var currentElement = parallaxElementsFive.eq(i);
            var scrolled = $(window).scrollTop();
              currentElement.css({
                'transform': 'translate3d(0,' + scrolled * +0.075 + 'px, 0)'
              });
          }
          for (var i = 0; i < parallaxQuantitySix; i++) {
            var currentElement = parallaxElementsSix.eq(i);
            var scrolled = $(window).scrollTop();
              currentElement.css({
                'transform': 'translate3d(0,' + scrolled * -0.4 + 'px, 0)'
              });
          }
        });
      });

});
