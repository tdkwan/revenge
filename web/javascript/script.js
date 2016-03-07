$(document).ready(function(){
  alert("hey");
  $("#slider1").responsiveSlides({
    auto: false,             // Boolean: Animate automatically, true or false
    speed: 500,            // Integer: Speed of the transition, in milliseconds
    timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
    pager: true,           // Boolean: Show pager, true or false
    nav: true,             // Boolean: Show navigation, true or false
    random: false,          // Boolean: Randomize the order of the slides, true or false
    pause: false,           // Boolean: Pause on hover, true or false
    pauseControls: true,    // Boolean: Pause when hovering controls, true or false
    prevText: "Previous",   // String: Text for the "previous" button
    nextText: "Next",       // String: Text for the "next" button
    maxwidth: 1300,           // Integer: Max-width of the slideshow, in pixels
    navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
    manualControls: "",     // Selector: Declare custom pager navigation
    namespace: "centered-btns",   // String: Change the default namespace used
    before: function(){},   // Function: Before callback
    after: function(){}     // Function: After callback
  });
  var $grid =
    $('.masonry-grid').masonry({
      itemSelector: '.grid-item',
      percentPosition: true,
      columnWidth: 320,
      gutter: 10,
      fitWidth: true
});
  $grid.imagesLoaded().progress(function() {
      $grid.masonry();
    });
  $(window).bind('scroll',function() {
      if ($(window).scrollTop() > 10) {
        $('.menuchange').addClass('fixed');
      } else {
        $('.menuchange').removeClass('fixed');
      }
  });
  $('nav').hover(function() {
    $('menu').addClass('menu:hover');
  })
});
