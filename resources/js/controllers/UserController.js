angular.module('UserController', []).controller('UserController', ['$scope', '$rootScope', 'AUTH_EVENTS', 'User', 'Auth',
  function ($scope, $rootScope, AUTH_EVENTS, User, Auth) {
    $scope.login = function () {
      Auth.login(this).then(function (user) {
        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
        $scope.setCurrentUser(user);
      }, function () {
        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
      });
    };

    $scope.create = function () {
      if (this.password != this.passwordConfirmation) {
        return alert('The passwords do not match.');
      }
      var user = new User({
        username: this.username,
        password: this.password,
        email: this.email
      });
      user.$save(function (res) {
        $location.path('users/view/' + res.id);
      }, function (err) {
        console.log(err);
      });
    };
  }
]);
