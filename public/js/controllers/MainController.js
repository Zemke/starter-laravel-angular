angular.module('MainController', []).controller('MainController', ['$scope', '$location', function ($scope, $location) {
  $scope.isActive = function (route) {
    return route === $location.path();
  }
}]);
