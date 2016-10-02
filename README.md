💁 *Zemke/starter-laravel-angular has been upgraded to AngularJS 1.5.8.*

💁 *Zemke/starter-laravel-angular has been upgraded to Laravel 5.3. You can pull the changes and run* `rm composer.lock && composer install --prefer-dist --no-scripts` *to merge the upgrade.*

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
- Laravel Elixir readily configured
  - Versioning of CSS and JS files (cache busting)
  - CSS and JS files will be included automatically
- A whole ready CRUD architecture
- Comes with Bootstrap and AngularJS configured to work together at their best
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

### Database setup

Edit `.env.example` according to your environment and save as `.env`.
An application key can be generates with the command `php artisan key:generate`.

Run these commands to create the tables within the database you have already created.

```
php artisan migrate:install
```
```
php artisan migrate:refresh
```

If you get an error like a `PDOException` try editing your `.env` file and change `DB_HOST=localhost` to `DB_HOST=127.0.0.1`. If that doesn’t work, file an issue on GitHub, I will be glad to help.
Source: http://stackoverflow.com/a/20733001

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

## Heroku deployment

### Unignore some files

You should remove `.env` and `composer.lock` from `.gitignore`.

#### .env

Set up your `.env` file like described in “Database setup” above.

### Heroku buildpacks

You will need to add custom buildpacks for Heroku. Create `.buildpacks` and paste:

```
https://github.com/heroku/heroku-buildpack-php
https://github.com/heroku/heroku-buildpack-nodejs
```

### Procfile

```
web: vendor/bin/heroku-php-apache2 public/
```

### NPM config

Your `package.json` should be changed to this:

```json
{
    "private": true,
    "devDependencies": {
        "gulp": "^3.8.8"
    },
    "dependencies": {
        "laravel-elixir": "^3.0.0",
        "gulp": "^3.8.8"
    },
    "scripts": {
        "postinstall": "gulp"
    }
}
```

The `scripts` `postinstall` part is the important here, this will generate the resources like JS and CSS files.

Have fun! Any feedback is welcome. Use [Issues](https://github.com/Zemke/starter-laravel-angular/issues) or [Twitter](https://twitter.com/FlorianZemke). My Twitter handle is @FlorianZemke. I’m looking forward to talk to you.

![Laravel](https://cloud.githubusercontent.com/assets/3391981/6683259/2e914726-cc84-11e4-856c-bb26bda733a0.png)
![AngularJS](https://cloud.githubusercontent.com/assets/3391981/6683229/9e0ea694-cc83-11e4-9b2e-59524dafd069.jpg)
