<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Todo</title>
    <script type="application/javascript"
            src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.13/angular.js"></script>
    <script type="application/javascript"
            src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.13/angular-route.js"></script>
    <script type="application/javascript" src="/js/appRoutes.js"></script>
    <script type="application/javascript" src="/js/controllers/MainController.js"></script>
    <script type="application/javascript" src="/js/app.js"></script>
</head>
<body ng-app="todoApp" ng-controller="MainController">

<div class="container">
    <a href="#articles">articles</a>
    <div ng-view>

    </div>
</div>

</body>
</html>