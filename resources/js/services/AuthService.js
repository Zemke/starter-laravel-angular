angular.module('AuthService', []).factory('Auth', ['$http', '$localStorage',
  function ($http, $localStorage) {
    var user = {};

    user.login = function (data) {
      // @TODO Caution! Rhetorical question ahead! Could this be done with ngResource?
      return $http
        .post('/api/user/login', {username: data.username, password: data.password})
        .then(function (res) {
          return res.data;
        });
    };

    return user;
  }
]);
