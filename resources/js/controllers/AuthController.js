angular.module('AuthController', []).controller('AuthController', ['$scope', '$rootScope', 'AUTH_EVENTS', 'Auth',
  function ($scope, $rootScope, AUTH_EVENTS, Auth) {
    $scope.login = function () {
      console.log(this);
      Auth.login(this).then(function (user) {
        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
        $scope.setCurrentUser(user);
      }, function () {
        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
      });
    };
  }
]);
