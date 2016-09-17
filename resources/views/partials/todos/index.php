<div ng-controller="TodoController" ng-init="find()">
    <p ng-if="!todos.length">
        There are no todos right now, <a href="/todos/create">create one!</a>
    </p>

    <div class="row" ng-repeat="todo in todos">
        <div class="col-lg-6">
            <div class="input-group">
                <span class="input-group-addon">
                    <input type="checkbox" ng-click="remove(todo)">
                </span>
                <input type="text" class="form-control" ng-model="todo.body"
                       ng-blur="update(todo)" enter-stroke="update(todo)">
            </div>
        </div>
    </div>
</div>


