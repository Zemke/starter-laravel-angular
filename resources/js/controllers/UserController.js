angular.module('UserController', []).controller('UserController', ['$scope', '$rootScope', 'User', 'Auth', '$localStorage',
  function ($scope, $rootScope, User, Auth, $localStorage) {
    $scope.login = function () {
      Auth.login(this).then(function (user) {
        $localStorage.token = user.token;
      }, function () {
        delete $localStorage.token;
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
