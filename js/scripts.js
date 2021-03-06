// Scroll Control
$(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('#scroll').fadeOut(2000);
     }
    else
     {
      $('#scroll').fadeIn();
     }
 });

 // hide footer
 $(window).scroll(function () {
  if ($('body').height() <= ($(window).height() + $(window).scrollTop())) {
    $('footer').hide();
  } else {
    $('footer').show();
  }
 });

 // fadepoint
$(window).scroll(function () {
  if ($(window).scrollTop() > 500) {
    $('.device').fadeTo(2000, 1);
  }
});

$(window).scroll(function () {
 if ($(window).scrollTop() > 2000) {
   $('.p1').fadeTo(2000, 1);
 }
});

$(window).scroll(function () {
  if ($(window).scrollTop() > 2700) {
    $('.p2').fadeTo(2000, 1);
  }
});

$(window).scroll(function () {
  if ($(window).scrollTop() > 2800) {
    $('.p3').fadeTo(2000, 1);
  }
});
$(window).scroll(function () {
  if ($(window).scrollTop() > 3400) {
    $('.p4').fadeTo(2000, 1);
  }
});


// fade in box
$(document).ready(function() {
  var element = document.getElementById("js-fadeInElement");
  $(element).addClass('js-fade-element-hide');

  $(window).scroll(function() {
    if( $("#js-fadeInElement").length > 0 ) {
      var elementTopToPageTop = $(element).offset().top;
      var windowTopToPageTop = $(window).scrollTop();
      var windowInnerHeight = window.innerHeight;
      var elementTopToWindowTop = elementTopToPageTop - windowTopToPageTop;
      var elementTopToWindowBottom = windowInnerHeight - elementTopToWindowTop;
      var distanceFromBottomToAppear = 300;

      if(elementTopToWindowBottom > distanceFromBottomToAppear) {
        $(element).addClass('js-fade-element-show');
      }
      else if(elementTopToWindowBottom < 0) {
        $(element).removeClass('js-fade-element-show');
        $(element).addClass('js-fade-element-hide');
      }
    }
  });

  // sliding panel
  $('.sliding-panel-h5,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart',function (e) {
    $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
    e.preventDefault();
  });
});
