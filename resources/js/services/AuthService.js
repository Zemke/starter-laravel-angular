angular.module('AuthService', []).factory('Auth', ['$http', 'Session',
  function ($http, Session) {
    var authService = {};

    authService.login = function (credentials) {
      return $http
        .post('/api/auth/login', credentials)
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
