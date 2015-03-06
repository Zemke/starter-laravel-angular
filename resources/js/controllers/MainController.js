angular.module('MainController', []).controller('MainController', ['$scope', '$location', 'USER_ROLES', 'Auth',
  function ($scope, $location, USER_ROLES, Auth) {
    /**
     * Responsible for highlighting the currently active menu item in the navbar.
     *
     * @param route
     * @returns {boolean}
     */
    $scope.isActive = function (route) {
      return route === $location.path();
    };

    $scope.currentUser = null;
    $scope.userRoles = USER_ROLES;
    $scope.isAuthorized = Auth.isAuthorized;
    $scope.setCurrentUser = function (user) {
      $scope.currentUser = user;
    };
  }
]);
