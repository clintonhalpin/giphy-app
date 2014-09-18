var client = new SFDC(window, 1);

function mainCtrl( $scope, giphy ) {
  var self = this;

  self.search = function(query) {
      giphy.search(query).then(function(res){
        self.gifs = res.data.data;
      })
  }

  self.sendToSocial = function(val) {
    console.log(val);
    client.api("/setComposeImage", {"url":"http://media.giphy.com/media/" + val + "/giphy.gif"});
  }
}

console.log(client);

module.exports = mainCtrl;
