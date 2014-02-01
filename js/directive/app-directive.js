var appDrt = angular.module('appDirectives', []);
 


appDrt.directive('uiApp', ['$timeout', '$rootScope', "$location",
    function($timeout, $rootScope, $store, $location, $apiService) {
        return {
            restrict: 'C',
            scope: true,
            link: function(scope, elm, attrs) {

               console.log("ui-app loaded!");


            }

        }


    }
])
