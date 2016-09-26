myApp.controller('addHeroController', ['$scope', '$http', function($scope, $http) {
  $scope.addHero = function(alias, first_name, last_name, city, power_name) {
    var dataToSend ={
      alias: alias,
      first_name: first_name,
      last_name: last_name,
      city: city,
      power_name: power_name.type
    };

    console.log('data to send: ', dataToSend);

    //ajax call
    $http({
      method: 'POST',
      url: '/heroes',
      data: dataToSend
    }).then(function successCallback(response) {
      console.log('post resp =', response);
    }, function errorCallback(response) {
      console.log('err');
    });
  };

  $http({
    method: 'GET',
    url: '/heroes/enum'
  }).then(function successCallback(response) {
    $scope.enum = response.data.map(function(type) {
      return {type: type };
    });
    $scope.selected = $scope.enum[0];
    console.log('enum =', $scope.enum);
  }, function errorCallback(response) {
    console.log('err');
  });
}]);
