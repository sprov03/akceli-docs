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


`composer.json`
``` json  composer.json
    "repositories": {
        "private-packagist": {
            "type": "composer",
            "url": "https://akceli.repo.packagist.com/{your-repository-name-goes-here}/"
        }
    }
```

``` sh
composer require akceli/laravel-code-generator
```

## Authorizing Akceli in Continuous Integration (CI) Environments

Once you have purchased an Akceli licence, you will be given an access token to a private repository that is configured for you.
You will then use the access token to view the composer package. Make sure this is added before you 

::: tip
Make Sure this is ran before you run composer install
:::

``` sh
composer config --auth http-basic.akceli.repo.packagist.com token {Your Access Token}
```

## Authorizing Akceli in Chipper CI

I Chipper CI for all of my laravel projects.  To authorize Akceli with Chipper CI, simply add akceli to the packages for your project.
[https://chipperci.com/](https://chipperci.com/)

* Repository Url: akceli.repo.packagist.com
* UserName: token  <--- Your user name is 'token'
* passowrd: {Your Access Token}


