var myApp = angular.module('myApp', [
  'ngRoute',
  'appControllers'
]);
 


myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/partials/home.html',
        controller: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);