$(function() {
  $(document).on('click', '.header__burger', function(e) {
    $(this).next().slideToggle();
  });

  $(document).on('click', function(e) {
    if (!$(e.target).is('.header__burger') && !($('.header__burger').css('display') == 'none'))
      $('.header__menu_adaptive').slideUp();
  });
});