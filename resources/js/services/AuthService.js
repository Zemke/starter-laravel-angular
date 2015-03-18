angular.module('AuthService', []).factory('Auth', ['$http', 'Session',
  function ($http, Session) {
    var user = {};

    user.login = function (data) {
      // @TODO Caution! Rhetorical question ahead! Could this be done with ngResource?
      return $http
        .post('/api/user/login', {username: data.username, password: data.password})
        .then(function (res) {
          Session.create(res.data.id, res.data.id, 'admin');
          return res.data;
        });
    };

    user.isAuthenticated = function () {
      return !!Session.userId;
    };

    user.isAuthorized = function (authorizedRoles) {
      if (!angular.isArray(authorizedRoles)) {
        authorizedRoles = [authorizedRoles];
      }
      return (user.isAuthenticated() &&
      authorizedRoles.indexOf(Session.userRole) !== -1);
    };

    return user;
  }
]);
