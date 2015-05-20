angular.module('UserService', []).factory('User', ['$resource',
  function ($resource) {
    return $resource('/api/user/:userId', {
      userId: '@id'
    }, {
      update: {
        method: 'PUT'
      },
      login: {
        method: 'POST',
        url: '/api/user/login'
      },
      getByToken: {
        method: 'GET',
        url: '/api/user/getByToken'
      }
    });
  }
]);
