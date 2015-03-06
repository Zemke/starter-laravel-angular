angular.module('AuthService', []).factory('Auth', ['$http', 'Session',
  function ($http, Session) {
    var authService = {};

    authService.login = function (data) {
      // @TODO Caution! Rhetorical question ahead! Could this be done with ngResource?
      return $http
        .post('/api/user/login', {username: data.username, password: data.password})
        .then(function (res) {
          Session.create(res.data.id, res.data.user.id,
            res.data.user.role);
          return res.data.user;
        });
    };

    authService.isAuthenticated = function () {
      return !!Session.userId;
    };

    authService.isAuthorized = function (authorizedRoles) {
      if (!angular.isArray(authorizedRoles)) {
        authorizedRoles = [authorizedRoles];
      }
      return (authService.isAuthenticated() &&
      authorizedRoles.indexOf(Session.userRole) !== -1);
    };

    return authService;

  }
]);
