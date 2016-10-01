<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/user/login', 'UserController@login');
Route::get('/user/getByToken', 'UserController@getByToken');

Route::resource('/todo', 'TodoController');
Route::resource('/user', 'UserController');

