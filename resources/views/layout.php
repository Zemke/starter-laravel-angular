<!doctype html>
<html lang="en">
<head>
    <base href="/">
    <meta charset="UTF-8">
    <title>Todo</title>
    <script type="application/javascript"
            src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.13/angular.js"></script>
    <script type="application/javascript"
            src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.13/angular-route.js"></script>
    <script type="application/javascript" src="/js/appRoutes.js"></script>
    <script type="application/javascript" src="/js/controllers/MainController.js"></script>
    <script type="application/javascript" src="/js/app.js"></script>
    <link rel="stylesheet" href="/css/app.css"/>
    <link rel="stylesheet" href="/css/all.css"/>
</head>
<body ng-app="todoApp" ng-controller="MainController">

<nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">Todos</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li ng-class="{active:isActive('/todos')}"><a href="/todos">List Todos</a></li>
                <li ng-class="{active:isActive('/todos/create')}"><a href="/todos/create">Create Todo</a></li>
            </ul>
        </div>
    </div>
</nav>

<div class="container">
    <div ng-view>
    </div>
</div>

</body>
</html>