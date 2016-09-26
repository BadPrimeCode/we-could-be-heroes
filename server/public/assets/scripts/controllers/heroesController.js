myApp.controller('heroesController', ['$scope', '$http', function($scope, $http) {
  $scope.getHeroes = function() {
    $http({
      method: 'GET',
      url: '/heroes'
    }).then(function successCallback(res) {
      $scope.heroes = res.data;
      console.log('got heroes: ', res);
    }, function errorCallback(res) {
      console.log( res );
    });
  };

  $scope.deleteHero = function(id) {
    console.log('clicked delete', id );
    $http({
      method: 'DELETE',
      url: '/heroes/' + id
    }).then(function successCallback(res) {
      console.log('deleted: ', res);
    }, function errorCallback(res) {
      console.log(res);
    });
  };
}]);
