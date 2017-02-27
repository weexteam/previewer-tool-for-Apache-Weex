// weex h5 laod pages
(function () {
  function getUrlParam(key, searchStr) {
    var reg = new RegExp('[?|&]' + key + '=([^&]+)');
    searchStr = searchStr || location.search;
    var match = searchStr.match(reg);
    return match && match[1];
  }
  var page = getUrlParam('page') || '/dist/index.js';
  if (!page) {
    if (window.top) {
      page = getUrlParam('page', top.location.search);
    } else {
      return console.warn('Page not loaded!!!');
    }
  }
  if (window.weex && window.weex.init ) {
    window.weex.init({
      appId: location.href,
      source: page,
      rootId: 'weex'
    });
  } else {
    var bundle = document.createElement('script');
    bundle.src = page;
    document.body.appendChild(bundle);
  }
})();
