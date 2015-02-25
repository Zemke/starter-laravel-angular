angular.module('todo').factory('Todo', ['$resource',
  function ($resource) {
    return $resource('/api/todos/:todoId', {
      todoId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);