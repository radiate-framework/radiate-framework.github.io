# Custom Taxonomies

[[toc]]

## Introduction

Post types are a great way to define content, and taxonomies are a great way to categorize it. WordPress posts have _categories_ and _tags_ - these are both taxonomies.

Taxonomies and terms are often confused. The simplest way to understand the difference is with an example:

> _Action_, _comedy_ and _horror_ are all _terms_. These terms are all genres, so the _taxonomy_ is _genre_.

The Radiate `cli` can create custom taxonomies ready to be defined on your post types.

Following on from the previous chapter [Custom Post Types](./custom-post-types), we will make a `Genre` taxonomy for our `Film` post type.

## Creating A Taxonomy

To get started, we'll use `make:taxonomy` to create a genre taxonomy. The `Taxonomy` name should be in the singular form for example **Genre** not **Genres**.

```
wp radiate make:taxonomy Genre
```

<AppNotice type="info">

Remember to use _StudlyCase_ for your taxonomy names. The name will be automatically transformed to _snake_case_.

</AppNotice>

Radiate will generate a `Genre` taxonomy in your `app/WordPress/Taxonomies` directory.

```php
<?php

namespace Theme\WordPress\Taxonomies;

use Radiate\WordPress\Taxonomy;

class Genre extends Taxonomy
{
    /**
     * The name
     *
     * @var string
     */
    protected $name = 'genre';

    /**
     * The singular label
     *
     * @var string
     */
    protected $singular = 'Genre';

    /**
     * The plural label
     *
     * @var string
     */
    protected $plural = 'Genres';

    /**
     * The options
     *
     * @var array
     */
    protected $options = [
        'public'            => true,
        'hierarchical'      => true,
        'show_admin_column' => true,
        'show_in_rest'      => true,
    ];
}
```

### Taxonomy Options

The taxonomy options are an array of properties for the `Taxonomy` for example, `hierarchical` determines if a term can have parent/child relationships to other terms.

The different arguments accepted are well documented in the [WordPress documentation](https://developer.wordpress.org/reference/functions/register_taxonomy/)

### Taxonomy Labels

One pain point of creating taxonomies the standard WordPress way is the many labels that tend to require the same string-replace treatment. I.e. _Add New Genre_, _Add New Subject_, _Add New Country_.

Radiate makes handling labels a breeze. In your `Taxonomy` class, the `$singular` and `$plural` names are determined for you. These labels are then inserted in the required places so you don't have to.

If you do want to specify your own labels, you can add a `labels` method to the `Taxonomy` and return an array of your own options.

```php
/**
 * Return the taxonomy labels
 *
 * @return array
 */
public function labels()
{
    return [
        'choose_from_most_used' => __("Choose From The Most Watched Genres"),
        'not_found'             => __("No Film Genres Found"),
    ];
}
```

<AppNotice type="info">

Labels are intelligently merged with Radiate's defaults so you can define as many or as few as you like and the rest will be taken care of.

</AppNotice>

### Registering Taxonomies

To register a taxonomy, they must be associated with a post type. To do this, you can add your `Taxonomy` classname to the `$taxonomies` array in your `PostType` class.

You can register as many taxonomies on a post type as you need, and you can also register the same taxonomy on multiple post types!

```php
<?php

namespace Theme\WordPress\PostTypes;

use Radiate\WordPress\PostType;
use Theme\WordPress\Taxonomies\Genre;

class Film extends PostType
{
    /**
     * The taxonomies
     *
     * @var array
     */
    protected $taxonomies = [
        Genre::class,
    ];
}
```

## Reserved Taxonomies

WordPress has some reserved taxonomies that you shouldn't override. `make:taxonomy` determines if the `Taxonomy` you attempted to create is reserved.

### Special Taxonomies

Some reserved taxonomies have been deemed "special" and may be extended with [custom post types](./custom-post-types) in the usual way.
When using `make:taxonomy` on one of these reserved taxonomies, the `Taxonomy` will be generated with a slimmed down class.

- category
- post_tag

### Blocked Taxonomies

Taxonomies attempting to use reserved words cannot be generated using `make:taxonomy`, returning an error in the console instead.

Here are a few examples of the reserved words:

- author
- fields
- name
- pagename
- post_status
- post_type
- subpost
- tag
- taxonomy
- term
- type

The full list of [reserved words](https://developer.wordpress.org/reference/functions/register_taxonomy/#reserved-terms) is extensive and most of them are unlikely choices for a taxonomy name anyway.
