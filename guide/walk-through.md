# Walk Through

This is just going to be a simple walk through for basic crud.  Lets make a cars table and generate working endpoints.

## Create The Migration
``` php
<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Migrations\Migration;

/**
 *  Documentation: https://laravel.com/docs/5.8/migrations#creating-columns
 */
class CreateCarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cars', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('year');
            $table->string('make');
            $table->string('model');
            $table->integer('number_of_crashes');

            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('cars');
    }
}

```

## Run The Migration

``` shell script
php artisan migrate
```

## Create the Model

``` shell script
php artisan akceli
```
![An image](/images/generate-cars-model.png)

## Create the Controller
``` shell script
php artisan akceli
```
![An image](/images/generate-cars-controller.png)

## Run the Cars Controller Tests: 1
![An image](/images/first-failing-cars-test.png)
* 6 test failed: you can see that the routes are not hooked up.
![An image](/images/show-cars-controller-not-hooked-up.png)
* So jump to the web.php file and register the controller, and add the following line
![An image](/images/added-cars-to-webphp.png)
* if you want Akceli to register this for you form now, just add the inline template that the Akceli command warned about bing missing.
![An image](/images/show-adding-the-inline-controller-template.png)

## Run the Cars Controller Tests: 2
![An image](/images/secont-cars-test-run.png)
* 4 tests failed:
![An image](/images/first-failing-test-case.png)
* the data is not valid but its setup so that you can very quickly modify the stubbed data for creating a valid request.
* Next lets checkout the Store method on the CarController
![An image](/images/store-cars-controller-method-inital-state.png)
* Now lets checkout the StoreCarRequest
![An image](/images/store-car-request-intial-state.png)
* Lets clean the validators to meet the required business logic.
![An image](/images/cleaned-up-store-car-request-rules.png)
* Now that we have fixed the validator lets add a dump to the method and rerun the test.
![An image](/images/cars-22.png)
## Looks like we still need to add update the fillable array on the Cars Model.
![An image](/images/fillale-error.png)
![An image](/images/inital-cars-model.png)
![An image](/images/updated-cars-model.png)
* Now that we have updated the fillable array lets run the tests again
![An image](/images/we-have-another-passing-test.png)
## Lets run the other tests again
![An image](/images/factory-failing-test.png)
* Thats an error in the car factory so lets go check it out.
![An image](/images/facker-inital-setup.png)
* Similar situation here where there is a lot of stubbed data ready be slightly tweaked.
![An image](/images/updated-facker-data.png)
## lets run the tests again.
![An image](/images/last-failing-test.png)
* All we have left is to pass valid test data and update the UpdateCarsRequest Rules.
![An image](/images/inital-update-car-request.png)
![An image](/images/final-update-car-request.png)
![An image](/images/final-test.png)
## All Tests Are Passing
![An image](/images/all-tests-are-passing.png)








