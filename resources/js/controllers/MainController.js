angular.module('MainController', []).controller('MainController', ['$scope', '$location',
  function ($scope, $location) {
    /**
     * Responsible for highlighting the currently active menu item in the navbar.
     *
     * @param route
     * @returns {boolean}
     */
    $scope.isActive = function (route) {
      return route === $location.path();
    };
  }
]);
