# Caching

[[toc]]

## Introduction

`Radiate` has a caching service that uses the WordPress transients API under the hood.

> Transients should be used to store any data that is expected to expire, or which can expire at any time.

As with most of the framework, the `Cache` API is based on that of Laravel, with all of the common methods for a simple caching mechanism with all of the benefits of using core WordPress APis.

## Retrieving data

The `get` method can be used to get data from the cache. If passed a default value, this will be used if the item is not present in the cache.

```php
<?php

use Radiate\Support\Facades\Cache;

Cache::get('key', 'default');

```

You can check if an item is in the cache with the `has` method.

```php
<?php

use Radiate\Support\Facades\Cache;

if (Cache::has('key')) {
    // do something
}

```

## Storing data

The `put` method can be used to store data to the cache. If the storage time is not passed, the data will be cached forever. Alternatively, use the `forever` method.

```php
<?php

use Radiate\Support\Facades\Cache;

// store in the cache for 10 seconds
Cache::put('key', 'value', 10);

// store in the cache forever
Cache::put('key', 'value');

// store in the cache forever
Cache::forever('key', 'value');

```

The `add` method will put data in the cache only if it is not already present.

```php
<?php

use Radiate\Support\Facades\Cache;

Cache::add('key', 'value', 10);

```

## Deleting data

The `forget` method can be used to delete an item from the cache, whilst the `flush` method will remove everything from the cache.

```php
<?php

use Radiate\Support\Facades\Cache;

// delete the key
Cache::forget('key');

// clear all items from the cache
Cache::flush();

```
