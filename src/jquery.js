  $('.buttonMenu').click(function (event) {
    $('.main_mobile_menu').toggleClass('active');
    if ($('.main_mobile_menu').css('display') === 'block') {
      $('.topBut').css({
        'transform': 'rotate(45deg)',
        'top': '8px'
      });
      $('.buttomBut').css({
        'transform': 'rotate(-45deg)',
        'bottom': '8px'
      });
      $('.centerBut').css('display', 'none');
    } else {
      $('.topBut').css({
        'transform': 'rotate(0deg)',
        'top': '0px'
      });
      $('.buttomBut').css({
        'transform': 'rotate(0deg)',
        'bottom': '0px'
      });
      $('.centerBut').css('display', 'block');
    }
  });