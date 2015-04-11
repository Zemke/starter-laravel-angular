angular.module('MainController', []).controller('MainController', ['$scope', '$location', '$localStorage', 'User',
  function ($scope, $location, $localStorage, User) {
    /**
     * Responsible for highlighting the currently active menu item in the navbar.
     *
     * @param route
     * @returns {boolean}
     */
    $scope.isActive = function (route) {
      return route === $location.path();
    };

    /**
     * Query the authenticated user by the Authorization token from the header.
     *
     * @param user {object} If provided, it won't query from database, but take this one.
     * @returns {null}
     */
    $scope.getAuthenticatedUser = function (user) {
      if (user) {
        $scope.authenticatedUser = user;
        return;
      }

      if (typeof $localStorage.token === 'undefined') {
        return null;
      }

      new User().$getByToken(function (user) {
        $scope.authenticatedUser = user;
      }, function (err) {
        console.log(err);
      });
    };

    $scope.logout = function () {
      delete $localStorage.token;
      $scope.authenticatedUser = null;
    };
  }
]);
