# Radiate\Http\Request

## Implements

- [ArrayAccess](https://www.php.net/manual/en/class.arrayaccess.php)
- [JsonSerializable](https://www.php.net/manual/en/class.jsonserializable.php)

## Uses

- [Radiate\Support\Traits\Macroable](/api/support/traits/macroable)

## Properties

### `$request`

The request attributes

```php
protected array $request
```

### `$cookies`

The cookie attributes

```php
protected array $cookies
```

### `$files`

The file attributes

```php
protected array $files
```

### `$server`

The server attributes

```php
protected array $server
```

### `$headers`

The header attributes

```php
protected array $headers
```

### `$userResolver`

The user resolver

```php
protected \Closure $userResolver
```

## Methods

### `__construct`

Create the request instance

```php
public function __construct(array $request = [], array $cookies = [], array $files = [], array $server = []): void
```

#### Properties

- `$request` Usually the global `$_REQUEST` array
- `$cookies` Usually the global `$_COOKIE` array
- `$files` Usually the global `$_FILES` array
- `$server` Usually the global `$_SERVER` array

### `capture`

Capture the global request

```php
public static function capture(): Request
```

### `createFrom`

Create a new request from this one

```php
public static function createFrom(self $from, ?Request $to = null): Request
```

#### Properties

- `$from` The request to create from
- `$to` The request to create to

### `server`

Get a server attribute

```php
public function server(string $key, mixed $default = null): mixed
```

#### Properties

- `$key` The key of the server entry to return
- `$default` The fallback if the entry doesn't exist

### `header`

Get a header

```php
public function header(string $key, mixed $default = null): mixed
```

#### Properties

- `$key` The key of the header to return
- `$default` The fallback if the header doesn't exist

### `isMethod`

Determine if the method matches the given method

```php
public function isMethod(string $method): bool
```

#### Properties

- `$method` The method to check against

### `method`

Get the intended method

```php
public function method(): string
```

### `realMethod`

Get the real request method

```php
public function realMethod(): string
```

### `merge`

Merge the attributes into the request

```php
public function merge(array $attributes): self
```

#### Properties

- `$attributes` The attributes to merge into the request

### `ajax`

Determine if the request was made with AJAX

```php
public function ajax(): bool
```

### `wantsJson`

Determine if the request can accept a JSON response

```php
public function wantsJson(): bool
```

### `expectsJson`

Determine if the request expects a JSON response

```php
public function expectsJson(): bool
```

### `has`

Determine if the attribute exists

```php
public function has(string $key): bool
```

#### Properties

- `$key` The key to check on the request

### `get`

Get an attribute or fallback

```php
public function get(string $key, $default = null): mixed
```

#### Properties

- `$key` The key to get
- `$key` The fallback if the entry doesn't exist

### `add`

Add an attribute to the request

```php
public function add(string $key, mixed $value): void
```

#### Properties

- `$key` The key to add
- `$value` The value to set in the request

### `remove`

Remove the attribute from the request

```php
public function remove(string $key): void
```

#### Properties

- `$key` The key to remove

### `user`

Get the request user

See the [AuthManager](/api/auth/auth-manager#user) class for more information

```php
public function user(): \WP_User|false
```

### `setUserResolver`

Set the user resolver

```php
public function setUserResolver(\Closure $resolver): self
```

#### Properties

- `$resolver` The user resolver

### `getUserResolver`

Set the user resolver

```php
public function getUserResolver(): \Closure
```

### `all`

Return the object as an array

```php
public function all(): array
```

### `toArray`

Return the object as an array

```php
public function toArray(): array
```

### `toJson`

Return the object as a json string

```php
public function toJson(): string
```

### `__toString`

Return the object as a json string

```php
public function __toString(): string
```

### `__isset`

Determine if the attribute exists

```php
public function __isset(string $key): bool
```

#### Properties

- `$key` The key to check on the request

### `__get`

Get an attribute

```php
public function __get(string $key): mixed
```

#### Properties

- `$key` The key to get

### `__set`

Add an attribute to the request

```php
public function __set(string $key, mixed $value): void
```

#### Properties

- `$key` The key to set
- `$value` The value to set
