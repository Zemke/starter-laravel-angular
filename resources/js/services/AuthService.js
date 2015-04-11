angular.module('AuthService', []).factory('Auth', ['$http', '$localStorage',
  function ($http, $localStorage) {
    var user = {};

    return user;
  }
]);
