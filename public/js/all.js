angular.module('todoApp', [
  'ngRoute',
  'ngResource',
  'appRoutes',
  'MainController',
  'TodoController',
  'TodoService'
]);


angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
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
    $locationProvider.html5Mode(true);
  }
]);

angular.module('TodoService', []).factory('Todo', ['$resource',
  function ($resource) {
    return $resource('/api/todo/:todoId', {
      todoId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
angular.module('MainController', []).controller('MainController', ['$scope', '$location',
  function ($scope, $location) {
    $scope.isActive = function (route) {
      return route === $location.path();
    }
  }
]);

angular.module('TodoController', []).controller('TodoController', ['$scope', 'Todo',
  function ($scope, Todo) {
    $scope.greeting = "Hello, World!";
  }
]);
