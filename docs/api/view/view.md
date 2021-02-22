# Radiate\View\View

## Properties

### `$view`

The view

```php
protected string $view
```

### `$path`

The view directory

```php
protected string $path
```

### `$data`

The view data

```php
protected array $data
```

## Methods

### `__construct`

Create the view instance

```php
public function __construct(string $view, string $path, array $data = []): void
```

#### Properties

- `$view` The view
- `$path` The view path
- `$data` The data to pass to the view

### `render`

Get the string contents of the view.

```php
public function render(): string
```

### `evaluatePath`

Get the evaluated contents of the view at the given path.

```php
protected function evaluatePath(string $__path, array $__data): string
```

#### Properties

- `$__path` The view path
- `$__data` The data to pass to the view

### `__toString`

Return the view.

```php
public function __toString(): string
```
