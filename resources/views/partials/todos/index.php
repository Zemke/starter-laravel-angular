<div ng-controller="TodoController" ng-init="find()">
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


