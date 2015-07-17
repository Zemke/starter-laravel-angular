💁 *Zemke/starter-laravel-angular has been upgraded to Laravel 5.1.0. You can pull the changes and run* `rm composer.lock && composer install --prefer-dist --no-scripts` *to merge the upgrade.*

# Laravel and AngularJS Starter Application

This is a repo for a starter application for a Single Page Application featuring the modern Laravel PHP framework and Google’s acclaimed front-end framework AngularJS. Just download and install and you have a good foundation for building any application.

## Features!

- Single Page Application
  - HTML5 mode URLs
  - Optimized Laravel and AngularJS routes
    - You kind of don’t need to care about routes, they work automatically as you add new views. Still allows for flexibility if you plan any special routes.
- Authentication!
  - Flexible, extensible, clean
  - Token-based ([tymondesigns/jwt-auth](https://github.com/tymondesigns/jwt-auth))
  - Persistent local storage
- Larevel Elixir readily configured
  - Versioning of CSS and JS files (cache busting)
  - CSS and JS files will be included automatically
- A whole ready CRUD architecture
- Comes with Bootstrap and AngularJS (via Bower) configured to work together at their best
- Livereload is enabled (cf https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)
- And more... have a try!

## Installation
```
git clone https://github.com/Zemke/starter-laravel-angular.git
```
```
composer install --prefer-dist
```
```
npm install
```
```
bower install
```

### Database Setup

Edit `.env.example` according to your environment and save as `.env`.
An application key can be generates with the command `php artisan key:generate`.

Run these commands to create the tables within the database you have already created.

```
php artisan migrate:install
```
```
php artisan migrate:refresh
```

## Run

To provide the JS and CSS files and to keep track of changes to these files:
```
gulp && gulp watch
```

To start the PHP built-in server:
```
php -S localhost:8080 -t public/
```

Now you can browse the site  [http://localhost:8080](http://localhost:8080). 🙌

## Requirements

- PHP >= 5.4
- Composer
- Gulp
- NPM
- MySQL

Have fun! Any feedback is welcome. Use [Issues](https://github.com/Zemke/starter-laravel-angular/issues) or [Twitter](https://twitter.com/FlorianZemke). My Twitter handle is @FlorianZemke. I’m looking forward to talk to you.

![Laravel](https://cloud.githubusercontent.com/assets/3391981/6683259/2e914726-cc84-11e4-856c-bb26bda733a0.png)
![AngularJS](https://cloud.githubusercontent.com/assets/3391981/6683229/9e0ea694-cc83-11e4-9b2e-59524dafd069.jpg)
