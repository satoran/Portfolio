$(document).ready(function() {
  var headerHeight = 0;
  var width = $(window).width();
  var widthBorder = 500;

  $('a[href^="#"]').click(function() {
    var speed = 1000;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);

    if (width <= widthBorder) {
      headerHeight = 50;
    }
    else {
      headerHeight = 70;
    }

    var position = target.offset().top - headerHeight;



    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });
});
