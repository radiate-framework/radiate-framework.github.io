# Authentication

[[toc]]

## Introduction

Radiate provides an `Auth` facade for accessing the authenticated user and calling methods such as `login` and `logout`.

The `Auth` facade is a wrapper around several WordPress functions to make handling user authentication consistent and easy to remember.

## Check If The User Is Authenticated

The `Auth` facade has `check` and `guest` methods to determine the current status of the user.

```php
<?php

use Radiate\Support\Facades\Auth;

// determine if the user is logged in
Auth::check();

// determine if the user is logged out
Auth::guest();
```

<AppNotice type="info">

Even though it is possible to determine if a user is authenticated using the check method, you will typically use a middleware to verify that the user is authenticated. To learn more about this, check out the documentation on [protecting routes](#protecting-routes).

</AppNotice>

## Retrieving The Authenticated User

You may access the authenticated user via the `user` method on the `Auth` facade. You can also get just the user ID if required.

```php
<?php

use Radiate\Support\Facades\Auth;

// get the logged in WP_User instance
Auth::user();

// get the logged in user ID
Auth::id();
```

### Get The User from The Request

The `Radiate\Http\Request` instance provides a `user` method for retrieving the authenticated user in a controller, middleware or anywhere else in your application.

<AppNotice type="warning">

REST API routes are stateless so the `user` method will always return false when called from an `api` route.

</AppNotice>

```php
<?php

namespace App\Http\Controllers;

use Radiate\Http\Request;
use Radiate\Routing\Controller;

class DoSomethingController extends Controller
{
    /**
     * Do something
     *
     * @param \Radiate\Http\Request $request
     * @return mixed
     */
    function __invoke(Request $request)
    {
        if ($request->user()) {
            //
        }
    }
}
```

## Protecting Routes

Route middleware can be used to protect routes from unauthenticated requests. Radiate comes with an `auth` middleware in the form of `Radiate\Auth\Middleware\Authenticate`. This middleware can be added to a route group to protect access from unauthenticated requests.

```php
<?php

use Radiate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::get('/admin', function () {
        // Only authenticated users may access this route...
    });
});
```

## Manually Authenticating Users

It is possible to manually log in a user by passing the authentication credentials to the `attempt` method on the `Auth` facade.

```php
<?php

use Radiate\Support\Facades\Auth;

$credentials = [
    'username' => '@admin',
    'password' => 'P@ssw0rd',
];

$remember = true;

if (Auth::attempt($credentials, $remember)) {
    //
}
```

You can also pass a `WP_User` instance to the `login` method:

```php
<?php

use Radiate\Support\Facades\Auth;

$user = new WP_User(1);

$remember = true;

// login is an alias for attempt
if (Auth::login($user, $remember)) {
    //
}
```

## Logging Out

To manually log users out of your application, you may use the `logout` method provided by the `Auth` facade.

```php
<?php

use Radiate\Support\Facades\Auth;

Auth::logout();
```
