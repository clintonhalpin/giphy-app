function mainCtrl( $scope, giphy ) {
  var self = this;

  self.search = function(query) {
      giphy.search(query).then(function(res){
        self.gifs = res.data.data;
      })
  }
}

module.exports = mainCtrl;
