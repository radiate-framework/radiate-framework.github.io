# HTTP Client

[[toc]]

## Introduction

Radiate provides an expressive, minimal API around the WordPress HTTP client, allowing you to quickly make outgoing HTTP requests to communicate with other web applications. Radiate's wrapper around `wp_remote_request` is focused on its most common use cases and a wonderful developer experience.

## Making Requests

To make requests, you may use the `get`, `post`, `put`, `patch`, and `delete` methods provided by the `Http` facade. First, let's examine how to make a basic `GET` request to another URL:

```php
use Radiate\Support\Facades\Http;

$response = Http::get('https://example.com');
```

The `get` method returns an instance of `Radiate\Http\Client\Response`, which provides a variety of methods that may be used to inspect the response:

```php
$response->body() : string;
$response->json() : array|mixed;
$response->collect() : Radiate\Support\Collection;
$response->status() : int;
$response->ok() : bool;
$response->successful() : bool;
$response->failed() : bool;
$response->serverError() : bool;
$response->clientError() : bool;
$response->header($header) : string;
$response->headers() : array;
```

The `Radiate\Http\Client\Response` object also implements the PHP `ArrayAccess` interface, allowing you to access JSON response data directly on the response:

```php
return Http::get('https://example.com/users/1')['name'];
```

### Request Data

Of course, it is common when making `POST`, `PUT`, and `PATCH` requests to send additional data with your request, so these methods accept an array of data as their second argument. By default, data will be sent using the `application/json` content type:

```php
use Radiate\Support\Facades\Http;

$response = Http::post('https://example.com/users', [
    'name' => 'Steve',
    'role' => 'Network Administrator',
]);
```

#### GET Request Query Parameters

When making `GET` requests, you may either append a query string to the URL directly or pass an array of key / value pairs as the second argument to the `get` method:

```php
$response = Http::get('https://example.com/users', [
    'name' => 'Taylor',
    'page' => 1,
]);
```

#### Sending Form URL Encoded Requests

If you would like to send data using the `application/x-www-form-urlencoded` content type, you should call the `asForm` method before making your request:

```php
$response = Http::asForm()->post('https://example.com/users', [
    'name' => 'Sara',
    'role' => 'Privacy Consultant',
]);
```

#### Sending A Raw Request Body

You may use the `withBody` method if you would like to provide a raw request body when making a request. The content type may be provided via the method's second argument:

```php
$response = Http::withBody(
    base64_encode($photo), 'image/jpeg'
)->post('https://example.com/photo');
```

### Headers

Headers may be added to requests using the `withHeaders` method. This `withHeaders` method accepts an array of key / value pairs:

```php
$response = Http::withHeaders([
    'X-First' => 'foo',
    'X-Second' => 'bar'
])->post('https://example.com/users', [
    'name' => 'Taylor',
]);
```

### Authentication

#### Basic Authentication

You may specify basic authentication credentials using the `withBasicAuth` methods, respectively:

```php
$response = Http::withBasicAuth('taylor@laravel.com', 'secret')->post(...);
```

#### Bearer Tokens

If you would like to quickly add a `bearer` token to the request's `Authorization` header, you may use the `withToken` method:

```php
$response = Http::withToken('token')->post(...);
```

### Timeout

The `timeout` method may be used to specify the maximum number of seconds to wait for a response:

```php
$response = Http::timeout(3)->get(...);
```

### Error Handling

Radiate's HTTP client wrapper does not throw exceptions on client or server errors (`400` and `500` level responses from servers). You may determine if one of these errors was returned using the `successful`, `clientError`, or `serverError` methods:

```php
// Determine if the status code is >= 200 and < 300...
$response->successful();

// Determine if the status code is >= 400...
$response->failed();

// Determine if the response has a 400 level status code...
$response->clientError();

// Determine if the response has a 500 level status code...
$response->serverError();
```

#### Throwing Exceptions

If you have a response instance and would like to throw an instance of `Radiate\Http\Client\RequestException` if the response status code indicates a client or server error, you may use the `throw` method:

```php
$response = Http::post(...);

// Throw an exception if a client or server error occurred...
$response->throw();

return $response['user']['id'];
```

The `Radiate\Http\Client\RequestException` instance has a public `$response` property which will allow you to inspect the returned response.

The `throw` method returns the response instance if no error occurred, allowing you to chain other operations onto the `throw` method:

```php
return Http::post(...)->throw()->json();
```

If you would like to perform some additional logic before the exception is thrown, you may pass a closure to the `throw` method. The exception will be thrown automatically after the closure is invoked, so you do not need to re-throw the exception from within the closure:

```php
return Http::post(...)->throw(function ($response, $e) {
//
})->json();
```

### Options

You may specify additional request options using the `withOptions` method. The `withOptions` method accepts an array of key / value pairs:

```php
$response = Http::withOptions([
    'compress' => true,
])->get('http://example.com/users');
```

## Concurrent Requests

Sometimes, you may wish to make multiple HTTP requests concurrently. In other words, you want several requests to be dispatched at the same time instead of issuing the requests sequentially. This can lead to substantial performance improvements when interacting with slow HTTP APIs.

Thankfully, you may accomplish this using the `pool` method. The `pool` method accepts a closure which receives an `Radiate\Http\Client\Pool` instance, allowing you to easily add requests to the request pool for dispatching:

```php
use Radiate\Http\Client\Pool;
use Radiate\Support\Facades\Http;

$responses = Http::pool(function (Pool $pool) {
    $pool->get('http://localhost/first'),
    $pool->get('http://localhost/second'),
    $pool->get('http://localhost/third'),
});

return $responses[0]->ok() && $responses[1]->ok()
```

As you can see, each response instance can be accessed based on the order it was added to the pool. If you wish, you can name the requests using the as method, which allows you to access the corresponding responses by name:

```php
use Radiate\Http\Client\Pool;
use Radiate\Support\Facades\Http;

$responses = Http::pool(function (Pool $pool) {
    $pool->as('first')->get('http://localhost/first'),
    $pool->as('second')->get('http://localhost/second'),
    $pool->as('third')->get('http://localhost/third'),
});

return $responses['first']->ok();
```
