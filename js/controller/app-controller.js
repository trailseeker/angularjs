var appControllers = angular.module('appControllers', []);
 
appControllers.controller('main', ['$scope', '$http',
  function ($scope, $http) {


  	console.log("main controller loaded! ");

  /*    
  	$http.get('data.json').success(function(data) {
        
    });
  */



  }]);
 
/*appControllers.controller('detailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.params = $routeParams.productID;
  }]);*/