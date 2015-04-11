<form name="loginForm" ng-controller="UserController" ng-submit="create()"
      class="form-horizontal" novalidate>
    <div class="form-group">
        <div class="col-md-3">
            <input type="text" id="username" ng-model="username"
                   class="form-control" placeholder="Username">
        </div>
    </div>
    <div class="form-group">
        <div class="col-md-3">
            <input type="text" id="email" ng-model="email"
                   class="form-control" placeholder="Email">
        </div>
    </div>
    <div class="form-group">
        <div class="col-md-3">
            <input type="password" id="password" ng-model="password"
                   class="form-control" placeholder="Password">
        </div>
    </div>
    <div class="form-group">
        <div class="col-md-3">
            <input type="password" id="passwordConfirmation" ng-model="passwordConfirmation"
                   class="form-control" placeholder="Password again">
        </div>
    </div>
    <div class="form-group">
        <div class="col-md-4">
            <button type="submit" class="btn btn-primary">Sign Up</button>
        </div>
    </div>
</form>
