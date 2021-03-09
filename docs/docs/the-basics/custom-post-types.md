# Custom Post Types

[[toc]]

## Introduction

Post types are a way to separate different forms of content. As an example, Your site may feature a blog (posts) and a list of your favourite films. Whilst you could add a "film" category to your posts, a better solution would be to create a film post type.

## Creating A Post Type

To get started, we'll use `make:post-type` to create a film post type. The `PostType` name should be in the singular form for example **Film** not **Films**.

```
wp radiate make:post-type Film
```

<AppNotice type="info">

Remember to use _StudlyCase_ for your post type names. The name will be automatically transformed to _snake_case_.

</AppNotice>

Radiate will generate a `Film` post type in your `app/WordPress/PostTypes` directory.

```php
<?php

namespace Theme\WordPress\PostTypes;

use Radiate\WordPress\PostType;

class Film extends PostType
{
    /**
     * The name
     *
     * @var string
     */
    protected $name = 'film';

    /**
     * The singular label
     *
     * @var string
     */
    protected $singular = 'Film';

    /**
     * The plural label
     *
     * @var string
     */
    protected $plural = 'Films';

    /**
     * The taxonomies
     *
     * @var array
     */
    protected $taxonomies = [
        //
    ];

    /**
     * The options
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

### Post Type Options

The post type options are an array of properties for the `PostType` for example, `has_archive` determines if the post type will have an archive page, `menu_icon` specifies the [Dashicon](https://developer.wordpress.org/resource/dashicons/#welcome-learn-more) to use.

The different arguments accepted are well documented in the [WordPress documentation](https://developer.wordpress.org/reference/functions/register_post_type/)

### Post Type Labels

One pain point of creating post types the standard WordPress way is the many labels that tend to require the same string-replace treatment. I.e. _Add New Film_, _Add New Book_, _Add New Event_.

Radiate makes handling labels a breeze. In your `PostType` class, the `$singular` and `$plural` names are determined for you. These labels are then inserted in the required places so you don't have to.

If you do want to specify your own labels, you can add a `labels` method to the `PostType` and return an array of your own options.

```php
/**
 * Return the post type labels
 *
 * @return array
 */
public function labels()
{
    return [
        'new_item'     => __("New Awesome Film"),
        'add_new_item' => __("Add New Amazing Film"),
        'edit_item'    => __("Edit SuperDuper Film"),
        'view_item'    => __("View The Film"),
        'view_items'   => __("View Some Films"),
        'search_items' => __("Search Our Catalogue Of Films"),
    ];
}
```

<AppNotice type="info">

Labels are intelligently merged with Radiate's defaults so you can define as many or as few as you like and the rest will be taken care of.

</AppNotice>

### Registering Post Types

Registering your custom post types is as easy as generating them. In your `WordPressServiceProvider`, add the `PostType` classname to the `$postTypes` array.

```php
<?php

namespace Theme\Providers;

use Radiate\Foundation\Providers\WordPressServiceProvider as ServiceProvider;
use Theme\WordPress\PostTypes\Film;

class WordPressServiceProvider extends ServiceProvider
{
    /**
     * The custom post types to register
     *
     * @var array
     */
    protected $postTypes = [
        Film::class,
    ];
}
```

## Reserved Post Types

WordPress has some reserved post types that you shouldn't override. `make:post-type` determines if the `PostType` you attempted to create is reserved.

### Special Post Types

Some reserved post types have been deemed "special" and may be extended with [custom taxonomies](./custom-taxonomies) in the usual way.
When using `make:post-type` on one of these reserved post types, the `PostType` will be generated with a slimmed down class.

- post
- page
- attachment

### Blocked Post Types

Post types that do not require custom taxonomies cannot be generated using `make:post-type`, returning an error in the console instead.

- revision
- nav_menu_item
- custom_css
- customize_changeset
- oembed_cache
- user_request
- wp_block
- action
- author
- order
- theme
