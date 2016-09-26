myApp.controller('addController', ['$scope', '$http', function($scope, $http) {
  $scope.addHero = function(alias, first_name, last_name, city, power_name) {
    var objectToSend ={
      alias: alias,
      first_name: first_name,
      last_name: last_name,
      city: city,
      power_name: power_name.type
    };

    console.log('hero to send: ', objectToSend);

    //ajax call
    $http({
      method: 'POST',
      url: '/heroes',
      data: objectToSend
    }).then(function success(res) {
      console.log('post res: ', res);
    }, function error(res) {
      console.log('error: ', res);
    });
  };

  $http({
    method: 'GET',
    url: '/heroes/enum'
  }).then(function success(res) {
    $scope.enum = res.data.map(function(type) {
      return {type: type };
    });
    $scope.selected = $scope.enum[0];
  }, function error(res) {
    console.log('error: ', res);
  });
}]);
