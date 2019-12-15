# Configuration

The configuration file for Akceli is ```config/akceli.php```

## Environment Check
This is what the initial part of ```config/akceli.php``` looks like.

``` php 
<?php

use Akceli\Akceli;
use Akceli\Console;
use Illuminate\Support\Str;

/**
 * This is here to prevent this from running in production
 */
if (env('APP_ENV') !== 'local') {
    return [];
}
```

::: warning
This set to prevent the Akceli Generators from being active in production.  Do not remove this, you would not want 
Akceli Generators to be active in a production application.  It requires terminal access to work but better safe then sorry.
:::


## Settings

``` php
<?php

return [
    /**
     * Options: 'auto-complete' or 'multiple-choice'
     * will default to 'multiple-choice' if this is missing or set to an invalid option
     *
     * This controls how you chose your templates.
     * (auto-complete): Is useful if you know what templates you have, you can just type the first few letters
     *      of the template name and when it is selected just press enter.  When you do not know what your options are
     *      you can simply press enter with nothing selected and it will switch to multiple-choice selection allowing
     *      for you to see the full lis of templates you want.
     */
    'select-template-behavior' => 'auto-complete',

    /**
     * This is for documenting what values you want to be show based on a given data type.
     */
    'column-settings' => [
        /**
         * Usage: <?=$column->getColumnSetting('php_class_doc_type', 'string')?>
         * 
         * Outputs based on column analysis:
         *    Integer: 'integer'
         *    String: 'string'
         *    Enum: 'string'
         *    Timestamp: 'Carbon'
         *    Boolean: 'boolean'
         */
        'php_class_doc_type' => Akceli::columnSetting('string', 'integer', 'string', 'string', 'Carbon', 'boolean'),
        
        /**
         * Usage: <?=$column->getColumnSetting('casts', 'string')?>
         *
         * Outputs based on column analysis:
         *    Integer: null
         *    String: null
         *    Enum: null
         *    Timestamp: 'datetime'
         *    Boolean: 'boolean'
         */
        'casts' => Akceli::columnSetting(null, null, null, null, 'datetime', 'boolean'),
    ],

    /**
     * This is where all the magic happens!!
     *
     * To make a new command: php artisan akceli:generate new-command
     * It will register the command in the following list for you and build out the boiler plate of the command class.
     */
    'template-groups' => [
        'new-command' => NewAkceliGenerator::class,
        'channel' => ChannelGenerator::class,
        'command' => CommandGenerator::class,
        'controller' => ControllerGenerator::class,
        'api_controller' => ApiControllerGenerator::class,
        'event' => EventGenerator::class,
        'exception' => ExceptionGenerator::class,
        'factory' => FactoryGenerator::class,
        'job' => JobGenerator::class,
        'listener' => ListenerGenerator::class,
        'mailable' => MailableGenerator::class,
        'middleware' => MiddlewareGenerator::class,
        'migration' => MigrationGenerator::class,
        'model' => ModelGenerator::class,
        'notification' => NotificationGenerator::class,
        'observer' => ObserverGenerator::class,
        'policy' => PolicyGenerator::class,
        'provider' => ProviderGenerator::class,
        'request' => RequestGenerator::class,
        'resource' => ResourceGenerator::class,
        'rule' => RuleGenerator::class,
        'test' => TestGenerator::class,
        'service' => ServiceGenerator::class,
        'seeder' => SeederGenerator::class,
        /** New Generators Get Inserted Here */
    ],
];
```

