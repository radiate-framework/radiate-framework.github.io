# Radiate\Support\Traits\Macroable

## Properties

### `$macros`

The registered string macros

```php
protected static array $macros = []
```

## Methods

### `macro`

Register a custom macro.

```php
public static function macro(string $name, object|callable $macro): void
```

#### Properties

- `$name` The name of the macro
- `$macro` The callback to run when the macro is invoked

### `hasMacro`

Checks if macro is registered

```php
public static function hasMacro(string $name): bool
```

#### Properties

- `$name` The name of the macro

### `__callStatic`

Dynamically handle calls to the class.

```php
public static function __callStatic(string $method, array $parameters): mixed
```

#### Properties

- `$method` The called method
- `$parameters` The parameters passed to the called method

### `__call`

Dynamically handle calls to the class.

```php
public function __call(string $method, array $parameters): mixed
```

#### Properties

- `$method` The called method
- `$parameters` The parameters passed to the called method
