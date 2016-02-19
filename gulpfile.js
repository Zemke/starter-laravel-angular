var elixir = require('laravel-elixir');
require('laravel-elixir-livereload');
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function (mix) {
  mix
    .less(
      'app.less'
    )
    .styles([
      'style.css'
    ])
    .scripts([
      '../../../bower_components/jquery/dist/jquery.js',
      '../../../bower_components/angular/angular.js',
      '../../../bower_components/ngstorage/ngStorage.js',
      '../../../bower_components/angular-route/angular-route.js',
      '../../../bower_components/angular-resource/angular-resource.js',
      '../../../bower_components/bootstrap/dist/js/bootstrap.js',
      'app.js',
      'appRoutes.js',
      'controllers/**/*.js',
      'services/**/*.js',
      'directives/**/*.js'
    ])
    .version([
      'css/all.css',
      'js/all.js'
    ])
    .copy(
      'public/js/all.js.map', 'public/build/js/all.js.map'
    )
    .copy(
      'public/css/all.css.map', 'public/build/css/all.css.map'
    )
    .livereload();
});