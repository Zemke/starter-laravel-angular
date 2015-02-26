angular.module('todoApp', [
  'ngRoute',
  'ngResource',
  'appRoutes',
  'enterStroke',
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
          var allowedParams = ['category', 'action', 'id'];
          var paramVals = [];
          for (var key in params) {
            if (allowedParams.indexOf(key) !== -1) {
              paramVals.push(params[key]);
            }
          }
          return '/partials/' + paramVals.join('/');
        }
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  }
]);

angular.module('MainController', []).controller('MainController', ['$scope', '$location',
  function ($scope, $location) {
    $scope.isActive = function (route) {
      return route === $location.path();
    }
  }
]);

angular.module('TodoController', []).controller('TodoController', ['$scope', '$location', '$routeParams', 'Todo',
  function ($scope, $location, $routeParams, Todo) {
    $scope.create = function () {
      var todo = new Todo({
        body: this.body
      });
      todo.$save(function (res) {
        $location.path('todos/view/' + res.id);
        $scope.body = '';
      }, function (err) {
        console.log(err);
      });
    };
    $scope.find = function () {
      $scope.todos = Todo.query();
    };
    $scope.remove = function (todo) {
      todo.$remove(function (res) {
        if (res) {
          for (var i in $scope.todos) {
            if ($scope.todos[i] === todo) {
              $scope.todos.splice(i, 1);
            }
          }
        }
      }, function (err) {
        console.log(err);
      })
    };
    $scope.update = function (todo) {
      todo.$update(function (res) {
      }, function (err) {
        console.log(err);
      });
    };
    $scope.findOne = function () {
      var splitPath = $location.path().split('/');
      var todoId = splitPath[splitPath.length - 1];
      $scope.todo = Todo.get({todoId: todoId});
    };
  }
]);

// Reacts upon enter key press.
angular.module('enterStroke', []).directive('enterStroke',
  function () {
    return function (scope, element, attrs) {
      element.bind('keydown keypress', function (event) {
        if (event.which === 13) {
          scope.$apply(function () {
            scope.$eval(attrs.enterStroke);
          });
          event.preventDefault();
        }
      });
    };
  }
);
angular.module('TodoService', []).factory('Todo', ['$resource',
  function ($resource) {
    return $resource('/api/todo/:todoId', {
      todoId: '@id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);