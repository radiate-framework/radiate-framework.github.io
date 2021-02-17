# Custom Post Types

[[toc]]

## Introduction

WordPress allows us to create custom post types which are a type of content such as a `page` or a `post`.

> For example, if you want to have a section on Books, it would be better suited to creating a custom post type for them.

Radiate makes creating custom post types a breeze when using the `cli` and the `CptServiceProvider`.

## Creating a post type

To get started, we'll use `make:cpt` to create a `Book` custom post type or CPT for short.

```
wp radiate make:cpt Book
```

```php
<?php

namespace Theme\Cpts;

use Radiate\WordPress\Cpt;

class Book extends Cpt
{
    /**
     * The post type
     *
     * @var string
     */
    protected $name = 'book';

    /**
     * The post type singular
     *
     * @var string
     */
    protected $singular = 'Book';

    /**
     * The post type plural
     *
     * @var string
     */
    protected $plural = 'Books';

    /**
     * Options for post type registration
     *
     * @var array
     */
    protected $options = [
        'public'       => true,
        'has_archive'  => true,
        'show_in_rest' => true,
        'menu_icon'    => 'dashicons-admin-post',
        'supports'     => ['title', 'editor', 'author', 'thumbnail'],
    ];
}
```
