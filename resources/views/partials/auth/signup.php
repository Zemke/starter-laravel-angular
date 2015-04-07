<form name="loginForm" ng-controller="UserController"
      ng-submit="create()" novalidate>
    <label for="username">Username:</label>
    <input type="text" id="username"
           ng-model="username">
    <label for="username">Email:</label>
    <input type="text" id="email"
           ng-model="email">
    <label for="password">Password:</label>
    <input type="password" id="password"
           ng-model="password">
    <label for="passwordConfirmation">Password Confirmation:</label>
    <input type="password" id="passwordConfirmation"
           ng-model="passwordConfirmation">
    <button type="submit">Login</button>
</form>
