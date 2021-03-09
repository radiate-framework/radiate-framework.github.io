# Radiate\Auth\AuthManager

## Methods

### `validate`

Validate a user's credentials.

```php
public function validate(array $credentials = []): bool
```

#### Properties

- `$credentials` An array containing the keys 'username' and 'password'
  ```php
  $credentials = ['username' => '@admin', 'password' => 'P@ssw0rd'];
  ```

### `attempt`

Attempt a login

```php
public function attempt(ArrayAccess|array $credentials, bool $remember = false): bool
```

#### Properties

- `$credentials` An array containing the keys 'username' and 'password'
  ```php
  $credentials = ['username' => '@admin', 'password' => 'P@ssw0rd'];
  ```
- `$remember` Sets the `rememberme`: See the [WordPress documentation](https://developer.wordpress.org/reference/functions/wp_set_auth_cookie/#description) for more information

### `loginUsingId`

Log in by the user ID

```php
public function loginUsingId(int $id, bool $remember = false): bool
```

#### Properties

- `$id` A user ID
- `$remember` Sets the `rememberme`: See the [WordPress documentation](https://developer.wordpress.org/reference/functions/wp_set_auth_cookie/#description) for more information

### `login`

Login a user

```php
public function login(\WP_User $user, bool $remember = false): bool
```

#### Properties

- `$user` A WP_User instance
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
