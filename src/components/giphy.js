var APIBASE = 'http://api.giphy.com/v1/gifs/',
    APIKEY = '&api_key=dc6zaTOxFJmzC',
    SEARCH = 'search?q=';

function replaceInString( replace, string ) {
  return string.split(' ').join(replace) 
}

var giphy = function( $http ) {

  function req(params) {
    return $http.get(params).then(function (res) {
      return res;
    });
  }

  function search(req) {
    return this.req(APIBASE + SEARCH + replaceInString('+', req) + APIKEY);
  }

  return {
    req: req,
    search: search
  };
}

module.exports = giphy;
