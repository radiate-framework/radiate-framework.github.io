# Radiate\View\Finder

## Properties

### `$files`

The filesystem

```php
protected \Radiate\Filesystem\Filesystem $files
```

### `$paths`

The view paths

```php
protected array $paths
```

### `$views`

The views

```php
protected array $views
```

### `$extensions`

Register a view extension with the finder

```php
protected array $extensions
```

## Methods

### `__construct`

Create the finder instance

```php
public function __construct(\Radiate\Filesystem\Filesystem $files, string|array $paths): void
```

#### Properties

- `$files` The filesystem instance
- `$paths` The view paths

### `find`

Get the fully qualified location of the view.

```php
public function find(string $name): string
```

#### Properties

- `$name` The view name

### `findInPaths`

Find the given view in the list of paths.

```php
protected function findInPaths(string $name, array $paths): string
```

#### Properties

- `$name` The view name
- `$paths` The view paths

### `getPossibleViewFiles`

Get an array of possible view files.

```php
protected function getPossibleViewFiles(string $name): array
```

#### Properties

- `$name` The view name
