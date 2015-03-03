<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('layout');
});

Route::get('/partials/index', function () {
    return view('partials.index');
});

Route::get('/partials/{category}/{action?}', function ($category, $action = 'index') {
    return view(join('.', ['partials', $category, $action]));
});

Route::get('/partials/{category}/{action}/{id}', function ($category, $action = 'index', $id) {
    return view(join('.', ['partials', $category, $action]));
});

// Getting RESTful
Route::resource('/api/todo', 'TodoController');

Route::controllers([
    'partials/auth' => 'Auth\AuthController',
    'partials/password' => 'Auth\PasswordController',
]);

// Catch all undefined routes. Always gotta stay at the bottom since order of routes matters.
Route::any('{undefinedRoute}', function ($undefinedRoute) {
    return view('layout');
})->where('undefinedRoute', '([A-z\d-\/_.]+)?');
