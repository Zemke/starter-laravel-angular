angular.module('UserController', []).controller('UserController', ['$scope', '$rootScope', 'User', 'Auth', '$localStorage',
  function ($scope, $rootScope, User, Auth, $localStorage) {
    $scope.login = function () {
      var user = new User({
        username: this.username,
        password: this.password
      });
      user.$login(function (res) {
        console.log(res);
      }, function (err) {
        console.log(err);
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
