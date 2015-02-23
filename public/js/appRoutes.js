angular.module('appRoutes', []).config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/partials/index',
      controller: 'MainController'
    })
    .when('/:category/:action?/:id?', {
      templateUrl: function (params) {
        var paramVals = [];
        for (var key in params)
          paramVals.push(params[key]);
        return '/partials/' + paramVals.join('/');
      }
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
