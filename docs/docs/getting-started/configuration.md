# Configuration

[[toc]]

## Introduction

Radiate was built with simplicity in mind so, to that end, there is no initial configuration required. If you want to customise the services provided, or the middleware used, the `functions.php` file is the place to head to.

<AppNotice type="info">

The `functions.php` file acts as the entry point to your application, whether that's a theme or a plugin.

</AppNotice>

## Middleware

## Service Providers

### Core Services

Radiate has a few core services that are required to run:

- ConsoleServiceProvider
- EventServiceProvider
- FilesystemServiceProvider

The great thing is they are also available for you to use throughout your theme or plugin.

### Additional Services

Radiate comes bundled with some useful and commonly used services such as authentication, mailing, and routing.

These services are registered in the theme or plugin `function.php` file.

not required so if you don't need them, or prefer another implementation, feel free to remove them from the `functions.php` file.

```php
$app->register(Radiate\Auth\AuthServiceProvider::class);
$app->register(Radiate\Mail\MailServiceProvider::class);
$app->register(Radiate\Routing\RoutingServiceProvider::class);
$app->register(Radiate\View\ViewServiceProvider::class);

$app->register(Theme\Providers\EventServiceProvider::class);
$app->register(Theme\Providers\RouteServiceProvider::class);
```
