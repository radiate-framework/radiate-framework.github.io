# Radiate\Auth\AuthManager

## Methods

### `attempt`

Attempt a login

This is an alias of [login](#login)

### `login`

Attempt a login

```php
public function login(ArrayAccess|array $credentials, bool $remember = false): bool
```

#### Properties

- `$credentials` An array containing the keys 'username' and 'password'
  ```php
  $credentials = ['username' => '@admin', 'password' => 'P@ssw0rd'];
  ```
- `$remember` Sets the `rememberme`: See the [WordPress documentation](https://developer.wordpress.org/reference/functions/wp_set_auth_cookie/#description) for more information

### `logout`

Log out

```php
public function logout(): void
```

### `user`

Return the user

```php
public function user(): \WP_User|false
```

### `id`

Return the user id

```php
public function id(): int|false
```

### `check`

Determine if the user is logged in

```php
public function check(): bool
```

### `guest`

Determine if the user is a guest

```php
public function guest(): bool
```

### `guard`

Return the auth guard

```php
public function guard(): self
```
