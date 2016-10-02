const elixir = require('laravel-elixir');

require('laravel-elixir-vue');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {
    mix
        .less(
            'app.less'
        )
        .styles([
            'style.css'
        ])
        .scripts([
            'libs/**/*.js',
            'app.js',
            'appRoutes.js',
            'controllers/**/*.js',
            'services/**/*.js',
            'directives/**/*.js'
        ])
        .version([
            'css/all.css',
            'css/app.css',
            'js/all.js'
        ]);
});
