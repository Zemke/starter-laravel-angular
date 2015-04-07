<form name="loginForm" ng-controller="UserController"
      ng-submit="login()" novalidate>
    <label for="username">Username:</label>
    <input type="text" id="username"
           ng-model="username">
    <label for="password">Password:</label>
    <input type="password" id="password"
           ng-model="password">
    <button type="submit">Login</button>
</form>
