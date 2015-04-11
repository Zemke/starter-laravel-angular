<form name="loginForm" ng-controller="UserController" ng-submit="login()"
      class="form-horizontal" novalidate>
    <div class="form-group">
        <div class="col-md-3">
            <input type="text" id="username" ng-model="username"
                   class="form-control" placeholder="Username">
        </div>
    </div>
    <div class="form-group">
        <div class="col-md-3">
            <input type="password" id="password" ng-model="password"
                   class="form-control" placeholder="Password">
        </div>
    </div>
    <div class="form-group">
        <div class="col-md-4">
            <button type="submit" class="btn btn-primary">Login</button>
        </div>
    </div>
</form>
