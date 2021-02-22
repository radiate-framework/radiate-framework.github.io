# Radiate\View\Factory

## Properties

### `$finder`

The file finder

```php
protected \Radiate\View\Finder $finder
```

## Methods

### `__construct`

Create the factory

Sets an instance of [Radiate\View\Finder](/api/view/finder)

```php
public function __construct(\Radiate\View\Finder $finder): void
```

#### Properties

- `$finder` The view file finder

### `make`

Make a view.

Returns an instance of [Radiate\View\View](/api/view/view)

```php
public function make(string $view, array $data = []): \Radiate\View\View
```

#### Properties

- `$view` The view
- `$data` The data to pass to the view

### `viewInstance`

Create a new view instance from the given arguments.

Returns an instance of [Radiate\View\View](/api/view/view)

```php
protected function viewInstance(string $view, string $path, array $data = []): \Radiate\View\View
```

#### Properties

- `$view` The view
- `$path` The view path
- `$data` The data to pass to the view

### `normalizeName`

Normalize the name (replace dot notation for slashes).

```php
protected function normalizeName(string $path): string
```

#### Properties

- `$path` The path to normalize
