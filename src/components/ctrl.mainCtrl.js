function mainCtrl( $scope, giphy ) {
  var self = this;
  giphy.search('grumpy cat').then(function(res){
    self.gifs = res.data.data;
  })

  self.search = function(query) {
      giphy.search(query).then(function(res){
        self.gifs = res.data.data;
      })
  }
}

module.exports = mainCtrl;
