angular.module('TodoController', []).controller('TodoController', ['$scope', 'Todo',
  function ($scope, Todo) {
    $scope.greeting = "Hello, World!";
  }
]);
