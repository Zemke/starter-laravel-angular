angular.module('UserController', []).controller('UserController', ['$scope', '$rootScope', 'User', 'Auth',
  function ($scope, $rootScope, User, Auth) {
    $scope.login = function () {
      Auth.login(this).then(function (user) {
        $scope.setCurrentUser(user);
      }, function () {
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
