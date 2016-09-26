console.log('client.js sourced');

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
      when("/heroes", {
        templateUrl: "/views/partials/heroes.html",
        controller: "heroesController"
      }).
      when("/add", {
        templateUrl: "/views/partials/add.html",
        controller: "addController"
      }).
      otherwise({
        redirectTo: "/views/partials/heroes.html"
      });
}]);
