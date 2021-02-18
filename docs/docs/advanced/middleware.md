# Middleware

[[toc]]

## Introduction

Middleware provide a simple way of accessing or transforming a HTTP request before it gets to a defined route controller.

When a request is passed to a route, it is first passed through each defined middleware. The middleware can then decide whether to pass on the same request, a modified request, a totally new request, or even abort altogether.

The chaining of middleware makes a reusable interface for dealing with requests before they get to the route controllers.

For example, Radiate provides middleware that trims whitespace from strings and converts empty strings into `null`. The request that reaches your controllers has been transformed into something more user friendly without you having to handle the logic in each controller.

A great use of middleware is to authenticate a request. If the request passes the authentication, the request reaches your controller, otherwise an error will be thrown.

Middleware is located in the `app/Http/Middleware` directory.

## Creating Middleware

Middleware can be created with the `make:middleware` command.

```
wp radiate make:middleware EnsureApiKeyIsvalid
```

This command will place a new `EnsureApiKeyIsvalid` class within your `app/Http/Middleware` directory. In this middleware, we will only allow access to the route if the supplied token input matches a specified value.

```php
namespace App\Http\Middleware;

use Closure;
use Radiate\Foundation\Http\Exceptions\HttpResponseException;
use Radiate\Http\Request;

class EnsureApiKeyIsvalid
{
    /**
     * Ensure the API key provided is valid
     *
     * @param \Radiate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if ($request->get('token') === 'my-api-token') {
            return $next($request);
        }

        throw new HttpResponseException('API token is invalid', 403);
    }
}
```

### Before And After Middleware

Middleware can perform tasks before or after passing the request deeper into the application. For example, the following middleware would perform some task before the request is handled by the application:

```php
namespace App\Http\Middleware;

use Closure;
use Radiate\Http\Request;

class BeforeMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        // Perform action

        return $next($request);
    }
}
```

However, this middleware would perform its task after the request is handled by the application:

```php
namespace App\Http\Middleware;

use Closure;
use Radiate\Http\Request;

class AfterMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        $response = $next($request);

        // Perform action

        return $response;
    }
}
```
