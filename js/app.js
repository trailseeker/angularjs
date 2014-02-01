var app = angular.module('myApp', [
  'ngRoute','ngCookies',
  'appControllers',
  'appDirectives'
]);
 





app.config(['$routeProvider','$locationProvider',
  function($routeProvider,$locationProvider,$cookies) {
    
    //$locationProvider.html5Mode(true);


   

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