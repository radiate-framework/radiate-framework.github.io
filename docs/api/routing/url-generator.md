# Radiate\Routing\UrlGenerator

## Properties

### `$request`

The request instance

```php
protected \Radiate\Http\Request $request
```

## Methods

### `__construct`

Assign the request object to the instance.

Sets an instance of [Radiate\Http\Request](/api/routing/url-generator)

```php
public function __construct(\Radiate\Http\Request $request): void
```

#### Properties

- `$request` The request object

### `current`

Get the current URL without query parameters.

```php
public function current(): string
```

### `full`

Get the current URL including query parameters.

```php
public function full(): string
```

### `previous`

Get the URL for the previous request.

```php
public function previous(string|null $fallback = null): string
```

#### Properties

- `$fallback` The fallback URL

---

```php
/**
 * Return the registration URL
 *
 * @param string $redirect The Redirect URL
 * @return string
 */
public function register(string $redirect = ''): string
```

```php
/**
 * Return the login URL
 *
 * @param string $redirect The redirect URL
 * @return string
 */
public function login(string $redirect = '/'): string
```

```php
/**
 * Return the logout URL
 *
 * @param string $redirect The redirect URL
 * @return string
 */
public function logout(string $redirect = '/'): string
```

```php
/**
 * Return the home URL
 *
 * @param string $path The path to append to the home URL
 * @return string
 */
public function home(string $path = ''): string
```

```php
/**
 * Return the URL to the path specified
 *
 * @param string $path The path to append to the home URL
 * @return string
 */
public function to(string $path): string
```

```php
/**
 * Redirect to another page, with an optional status code
 *
 * @param string  $url    The URL to redirect to
 * @param integer $status The status code to send
 * @return void
 */
public function redirect(string $url, int $status = 302): void
```

```php
/**
 * Return the admin URL
 *
 * @param string $path The path to append to the admin URL
 * @return string
 */
public function admin(string $path = ''): string
```

```php
/**
 * Return the ajax URL
 *
 * @param string $action The ajax action
 * @return string
 */
public function ajax(string $action = ''): string
```

```php
/**
 * Return the REST URL
 *
 * @param string $path The path to append to the admin URL
 * @return string
 */
public function rest(string $path = ''): string
```

```php
/**
 * Determine if the given path is a valid URL.
 *
 * @param  string  $path
 * @return bool
 */
public function isValidUrl(string $path): bool
```
