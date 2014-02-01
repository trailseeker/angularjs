var appCtrl = angular.module('appControllers', []);
 
appCtrl.controller('main', ['$scope', '$http',
  function ($scope, $http) {


  	console.log("main controller loaded! ");

  /*    
  	$http.get('data.json').success(function(data) {
        
    });
  */



  }]);
 
/*appCtrl.controller('detailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.params = $routeParams.productID;
  }]);*/