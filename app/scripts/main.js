console.log('\'Allo \'Allo!');


function viewport() {
  var e = window, a = 'inner';
  if (!('innerWidth' in window )) {
    a = 'client';
    e = document.documentElement || document.body;
  }
  return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
}

function toggleMainMenu()
{
  if (viewport().width <= window.xsScreenMax)
  {
    console.log('toggle');
    var mobileMenuIcon = $('#left-sidebar #mobile-menu-icon');
    var mainMenu = $('#left-sidebar #main-menu');
    if (mainMenu.is(':visible')){
      mainMenu.addClass('menu_closed_on_xs').removeClass('menu_opened_on_xs').slideUp('fast', function(){
        mobileMenuIcon.removeClass('active');
      });
    }else{
      mainMenu.addClass('menu_opened_on_xs').removeClass('menu_closed_on_xs').slideDown('fast', function(){
        mobileMenuIcon.addClass('active');
      });
    }
  }
}


function resize(){
  $('canvas').css({
    'width':$(window).width()
  , 'height':$(window).height()
  });
  $('.gui').css({
    'width':$(window).width()
  , 'height':$(window).height()
  });
}

$(window).resize(resize);

$(function(){
  resize();
  window.xsScreenMax = 768;
  window.smScreenMax = 992;
  $('#mobile-menu-icon').click(toggleMainMenu);
});