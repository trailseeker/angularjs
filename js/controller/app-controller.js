var appCtrl = angular.module('appControllers', []);
 
appCtrl.controller('main', ['$scope', '$http',
  function ($scope, $http) {


  	console.log("main controller loaded! ");


  


/*    var tstamp = Math.round(+new Date()/1000);
    var DataUrl = "http://jsonp.jit.su/?callback=JSON_CALLBACK&url=http://jsonview.com/example.json?aa=" + tstamp;
    
  	$http.jsonp(DataUrl).success(function(data) {
        console.log("Data Recieved! ", data);
    });
  
*/

  }]);
 
/*appCtrl.controller('detailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.params = $routeParams.productID;
  }]);*/