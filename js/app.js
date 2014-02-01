var app = angular.module('myApp', [
  'ngRoute',
  'appControllers',
  'appDirectives'
]);
 


app.config(['$routeProvider','$locationProvider',
  function($routeProvider,$locationProvider) {
 

    $routeProvider.
      when('/', {
        templateUrl: '/partials/home.html',
        controller: 'main'
      })
      .when('/sample', {
        templateUrl: '/partials/sample.html'
      })      
      .otherwise({
        redirectTo: '/'
      });
  }]);