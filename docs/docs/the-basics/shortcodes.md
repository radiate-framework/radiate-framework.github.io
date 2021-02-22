# Shortcodes

[[toc]]

## Introduction

## Creating A Shortcode

You may generate a `Shortcode` by using the `make:shortcode` Radiate command:

```
wp radiate make:shortcode RecentPosts
```

This will generate a `Shortcode` class located in your `app/WordPress/Shortcodes` directory.

```php
<?php

namespace Theme\WordPress\Shortcodes;

use Radiate\WordPress\Shortcode;

class RecentPosts extends Shortcode
{
    /**
     * The shortcode name
     *
     * @var string
     */
    protected $name = 'recent_posts';

    /**
     * An array of allowed attributes and defaults
     *
     * @var array
     */
    protected $defaultAttributes = [
        //
    ];

    /**
     * handle the shortcode
     *
     * @return mixed
     */
    public function handle()
    {
        //
    }
}
```

The class generated will register a shortcode as a _snake_case_ of your class name, for example, `RecentPosts` will register the `[recent_posts]` shortcode.

### Default Attributes

Shortcodes accept attributes in the same manner as HTML elements. Use the `$defaultAttributes` array to declare your attributes with their default values. Attributes used in the shortcode that aren't declared on the class will be disregarded.

```php
/**
    * An array of allowed attributes and defaults
    *
    * @var array
    */
protected $defaultAttributes = [
    'count' => 4,
    'order' => 'ASC',
];
```

If the shortcode used is `[recent_posts count="3" post_type="page"]` The attributes made available to your `Shortcode` class will be:

```php
[
    'count' => '3',
    'order' => 'ASC',
]
```

<AppNotice type="info">

Attributes will be defined as a `string` so any type manipulation should be done manually.

</AppNotice>

Attributes declared in the `$defaultAttributes` array will be available as dynamic properties on the `Shortcode` class, for example you can get the shortcode count as `$this->count` or `$this->order`.

<AppNotice type="warning">

WordPress converts all shortcode attributes to lower case. We also recommend specifying your attributes as _snake_case_.

</AppNotice>

### Shortcode Content

As well as attributes, shortcodes can accept content for example:

```
[recent_posts count="4"]Radiate's Most Recent Posts:[/recent_posts]
```

This is available on the `Shortcode` with the `content` method.

```php
public function handle()
{
    return $this->content(); // Radiate's Most Recent Posts:
}
```

### Dependency Injection & Shortcodes

The Radiate service container is used to resolve all Radiate `handle` methods on the `Shortcode` class. This means you can type hint any dependency on the `handle` method and the container will resolve it for you.

For example, if your shortcode displays a login form to guests but redirects to the account page for logged in users, you might do this:

```php
<?php

use Radiate\Http\Request;

public function handle(Request $request)
{
    if ($request->user()) {
        die(wp_redirect('/account'));
    }

    return $this->view('shortcodes.login-form');
}
```

## Handling The Shortcode

The `handle` method of your `Shortcode` class is where you will define what happens when the shortcode is used. In most instances, the `handle` method will return a string to output to the screen.

```php
public function handle()
{
    // do something

    return 'Hello World!';
}
```

### Shortcode Views

The Radiate `Shortcode` class makes the `view` method available so you can return a template file rather than writing it in your `handle` method.

The `Shortcode` instance is automatically passed to the view, available as the `$shortcode` variable. Other parameters may be passed to your view from the `handle` method.

```php
public function handle()
{
    $displayMode = $this->count > 3 ? 'grid' : 'column';

    $posts = wp_get_recent_posts([
        'numberposts' => $this->count,
        'order'       => $this->order,
        'post_status' => 'publish',
    ], OBJECT);

    return $this->view('shortcodes.recent-posts', compact('displayMode', 'posts'));
}
```

<AppNotice type="info">

Shortcode attributes will be available in your view like so `$shortcode->count` and `$shortcode->order`.

</AppNotice>

In you view, you will be able to access the shortcode attributes like so:

```php
<div class="recent-posts">

    <?php echo $shortcode->content(); ?>

    <ul class="<?php echo $displayMode; ?>">

        <?php foreach ($posts as $post) : ?>

            <li><?php echo $post->title; ?></li>

        <?php endforeach; ?>
    </ul>
<div>
```

## Registering The Shortcode

You can register your newly created shortcode by adding the classname to the `WordPressServiceProvider` in the `$shortcodes` array.

```php
<?php

namespace Theme\Providers;

use Radiate\Foundation\Providers\WordPressServiceProvider as ServiceProvider;
use Theme\WordPress\Shortcodes\RecentPosts;

class WordPressServiceProvider extends ServiceProvider
{
    /**
     * The shortcodes to register
     *
     * @var array
     */
    protected $shortcodes = [
        RecentPosts::class,
    ];
}
```

Shortcodes should be unique so, if another shortcode is registered before yours with the same name, then your shortcode will not be registered.

<AppNotice type="info">

Shortcodes should be unique so we recommend giving the name a unique prefix.

</AppNotice>
