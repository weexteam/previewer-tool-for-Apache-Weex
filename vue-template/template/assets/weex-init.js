(function () {
  function getUrlParam (key) {
    var reg = new RegExp('[?|&]' + key + '=([^&]+)')
    var match = location.search.match(reg)
    return match && match[1]
  };
  var page = 'dist/' + getUrlParam('page') || 'index.js';
  var bundle = document.createElement('script')
  // only for web
  bundle.src = page
  document.body.appendChild(bundle)
})();