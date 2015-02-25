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