# Radiate\View\View

## Properties

### `$basePath`

The views base path

```php
protected string $basePath
```

## Methods

### `__construct`

Create the view instance

```php
public function __construct(string $basePath): void
```

#### Properties

- `$basePath` The base path to resolve all views

### `make`

Make a view

```php
public function make(string $path, array $args = []): string
```

#### Properties

- `$path` The path to the view. This can be _dot_ separated
- `$args` An array of arguments to pass into the view
