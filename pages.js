var showPage = function (event, page) {
  event.preventDefault();
  $('body').css('overflow-y', 'hidden');
  $('.page-' + page).addClass('show');
  $('.header').addClass('header-inverted');
}

var closePages = function (event) {
  if (event) event.preventDefault();
  $('body').css('overflow-y', 'auto');
  $('.header').removeClass('header-inverted');
  $('.page').removeClass('show');
}
