var menuControllers = angular.module('menuControllers',[]);

menuControllers.controller('BeveragesCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('js/beverages.json').success(function(data) {
      $scope.beverages = data;
      $scope.oneAtATime = true;
    });
  }]);

  menuControllers.controller('FoodCtrl', ['$scope', '$http',
    function($scope, $http) {
      $http.get('js/foodmenu.json').success(function(data) {
        $scope.foodmenu = data;
      });
    }]);