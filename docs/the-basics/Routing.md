# Routing

[[toc]]

The Router is a powerful wrapper around the WordPress `register_rest_route` function enabling you to use groups, middleware, and controllers.

The most basic route accepts a URI and a closure, providing a very simple and expressive method of defining routes and behavior without complicated routing configuration files:

```php
use Radiate\Support\Facades\Route;

Route::get('/greeting', function () {
    return 'Hello World';
});

// https://example.com/wp-json/api/greeting
```

There is also a special `ajax` method that registers an AJAX route with the same fluent API. The AJAX action is passed instead of a URI.

```php
use Radiate\Support\Facades\Route;

Route::ajax('greeting', function () {
    return 'Hello World';
});

// https://example.com/wp-admin/admin-ajax.php?action=greeting
```

## The default route files

All routes are defined in your route files, which are located in the routes directory. These files are automatically loaded by your application's `App\Providers\RouteServiceProvider`. The `routes/ajax.php` file defines AJAX routes. These routes are assigned the `ajax` middleware group, which provides features like CSRF protection. The routes in `routes/api.php `are stateless and are assigned the `api` middleware group.

```php
use App\Http\Controllers\UserController;

Route::get('/user', [UserController::class, 'index']);

// /wp-json/api/user
```

The WordPress REST API requires a namespace for each route. Routes defined in the `routes/api.php` file are nested within a route group by the `RouteServiceProvider`. Within this group, the `api` namespace is automatically applied so you do not need to manually apply it to every route in the file. You may modify the prefix and other route group options by modifying your `RouteServiceProvider` class.

## Available router methods

The router allows you to register REST routes that respond to any HTTP verb:

```php
// REST routes
Route::get($uri, $callback);
Route::post($uri, $callback);
Route::put($uri, $callback);
Route::patch($uri, $callback);
Route::delete($uri, $callback);

// AJAX routes
Route::ajax($action, $callback);
```

Sometimes you may need to register a route that responds to multiple HTTP verbs. You may do so using the `match` method. Or, you may even register a route that responds to all HTTP verbs using the any method:

```php
Route::match(['get', 'post'], '/', function () {
    //
});

Route::any('/', function () {
    //
});
```

## Route groups

Route groups allow you to share attributes, such as middleware, across a large number of routes without needing to define those attributes on each individual route.

Nested groups merge attributes with their parent group. Middleware is merged while prefixes are appended. Namespace delimiters and slashes in URI prefixes are automatically added where appropriate.

### Middleware

To assign middleware to all routes within a group, you may use the middleware method before defining the group. Middleware are executed in the order they are listed in the array:

```php
Route::middleware(['first', 'second'])->group(function () {
    Route::get('/', function () {
        // Uses first & second middleware...
    });

    Route::get('/user/profile', function () {
        // Uses first & second middleware...
    });
});
```

### Route prefixes

The prefix method may be used to prefix each route in the group with a given URI. For example, you may want to prefix all route URIs within the group with admin:

```php
Route::prefix('admin')->group(function () {
    Route::get('/users', function () {
        // Matches The "/admin/users" URL
    });
});
```

<AppNotice type="warning">AJAX routes will ignore any prefixes given to the router group.</AppNotice>
