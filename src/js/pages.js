var showPage = function (event, page) {
  event.preventDefault();
  document.body.style['overflow-y'] = 'hidden';
  document.getElementById('page-' + page).className += ' show';
  document.getElementById('header').className += ' header-inverted';
}

var closePages = function (event) {
  if (event) event.preventDefault();
  document.body.style['overflow-y'] = 'auto';
  document.getElementById('header').className = 'header';
  var pages = [].slice.call(document.getElementsByClassName('page'));
  console.log(pages);
  pages.map(function(page) {
    page.className = 'page';
  });
}
