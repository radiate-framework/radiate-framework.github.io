# Encryption

[[toc]]

## Introduction

Radiate provides a `Crypt` facade for accessing the encryption service.

## Getting started

Before you can use the `Encryptor`, you will need to set up an encryption key. Using the command `key:generate`, you can create a secure encryption key.

```
wp radiate key:generate
```

Once you have a key generated, you can use the encryptor.

### Encrypt

```php
<?php

use Radiate\Support\Facades\Crypt;

$secret = Crypt::encryptString('secret-token');

```

### Decrypt

```php
<?php

use Radiate\Support\Facades\Crypt;

$decrypted = Crypt::decryptString($secret);

```

## Available methods

In addition to `encryptString` and `decryptString`, you can also call `encrypt` and `decrypt` from the `Crypt` facade. These methods will serialize/deserialize the input before encrytiing/decrypting.

You can also generate a key with `generateKey`:

```php
Crypt::generateKey('AES-256-CBC');

```

...and get the key with `getKey`:

```php
$key = Crypt::getKey();

```
