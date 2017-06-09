// Scroll Control
$(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('#scroll').fadeOut();
     }
    else
     {
      $('#scroll').fadeIn();
     }
 });

// fade-half class
$(window).scroll(function(){
  var sT = $(window).scrollTop(), wH = $(window).height();
  $('.fade-half').each(function(){
    var ths = $(this);
    if(sT + wH > ths.offset().top + (ths.height()/2)){
      ths.fadeOut(2000);
    };
  });
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
