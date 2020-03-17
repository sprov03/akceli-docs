# Installation

## Requirements

* php > 7.0
* Laravel Framework 5.8+
* Composer

## Installing Akceli

Once you have purchased an Akceli licence, you will be given an access token to a private repository that is configured for you.
You will then use the access token to view the composer package.

::: tip Akceli Licence
You will need to purchase an Akceli Licence if you have not already done so.
[https://akceli.io](https://akceli.io)
:::

Add the following to your `composer.json` to register the akceli repository
``` json  composer.json
    "repositories": [
        {
            "type": "composer",
            "url": "https://packages.akceli.io"
        }
    ]
```

require the package into your project: You will be prompted for username and password to authorize with the repository,
it will be the username and password used to purchase the licence.

``` sh
composer require akceli/laravel-code-generator
```

Last simply run akceli pubish command, it will configure your composer.json to load in the info it needs, publish Generators, Templates, and the `config/akceli.php`
```gitignore
php artisan akceli:publish
```

## Authorizing Akceli in Continuous Integration (CI) Environments

::: tip
Make Sure this is ran before you run composer install
:::

``` sh
composer config --auth http-basic.packages.akceli.io {Your Email} {Your Password}
```

## Authorizing Akceli in Chipper CI

I use Chipper CI for all of my laravel projects.  To authorize Akceli with Chipper CI, simply add akceli to the packages for your project.
[https://chipperci.com/](https://chipperci.com/)

* Repository Url: https://packages.akceli.io
* UserName: Your email
* passowrd: Your password


