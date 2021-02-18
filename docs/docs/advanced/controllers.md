# Controllers

[[toc]]

## Introduction

Instead of defining all of your request handling logic as closures in your route files, you may wish to organize this behavior using "controller" classes. Controllers can group related request handling logic into a single class. For example, a `PostController` class might handle all incoming requests related to posts, including showing, creating, updating, and deleting posts. By default, controllers are stored in the `app/Http/Controllers` directory.

## Writing Controllers

### Basic Controllers

Use the `make:controller` Radiate command to generate a controller.

```
wp radiate make:controller HomepageController
```

The newly generated `HomepageController` class will be located in your `app/Http/Controllers` directory.

Here is an example controller. Note it extends the `Radiate\Routing\Controller`.

```php
namespace Theme\Http\Controllers;

use Radiate\Http\Request;
use Radiate\Routing\Controller;

class HomepageController extends Controller
{
    /**
     * Handle the controller action
     *
     * @param \Radiate\Http\Request $request
     * @return mixed
     */
    public function __invoke(Request $request)
    {
        //
    }
}
```

You can define a route to this controller like so:

```php
Route::get('/', Theme\Http\Controllers\HomepageController::class);
```

When the route is matched by WordPress, the `__invoke` method on the `App\Http\Controllers\HomepageController` class will be called and the `Request` and any route parameters will be passed to the method.

<AppNotice type="info">

By default `make:controller` will generate a controller with an invokable method.

</AppNotice>

### Multiple Action Controllers

Some controllers may have multiple methods for different actions. E.g. a `PostController` may need to show all posts and a single post. To keep this logic contained in the same controller, we define multiple methods to handle each action.

```php
class PostController extends Controller
{
    /**
     * Show all posts
     *
     * @param \Radiate\Http\Request $request
     * @return mixed
     */
    public function index(Request $request)
    {
        //
    }

    /**
     * Show a single post
     *
     * @param \Radiate\Http\Request $request
     * @param int $id
     * @return mixed
     */
    public function show(Request $request, int $id)
    {
        //
    }
}
```

We have defined in `index` method to show all posts, and a `show` method that will return one post. Notice how the show method accepts an `$id` as a parameter. This is a route parameter as seen below.

```php
Route::get('posts', [Theme\Http\Controllers\PostController::class, 'index']);
Route::get('posts/{id}', [Theme\Http\Controllers\PostController::class, 'show']);
```

### Resource Controllers

Writing out many routes for the same CRUD actions can be simplified by using a resource controller. Running the `make:controller` command with the `--resource` option will generate a resource controller.

```
wp radiate make:controller PostController --resource
```

Here is an example resource controller:

```php
namespace Theme\Http\Controllers;

use Radiate\Http\Request;
use Radiate\Routing\Controller;

class PostController extends Controller
{
    /**
     * Show multiple resources
     *
     * @param \Radiate\Http\Request $request
     * @return mixed
     */
    public function index(Request $request)
    {
        //
    }

    /**
     * Show a resource
     *
     * @param \Radiate\Http\Request $request
     * @param int $id
     * @return mixed
     */
    public function show(Request $request, int $id)
    {
        //
    }

    /**
     * Store a new resource
     *
     * @param \Radiate\Http\Request $request
     * @return mixed
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Update a resource
     *
     * @param \Radiate\Http\Request $request
     * @param int $id
     * @return mixed
     */
    public function update(Request $request, int $id)
    {
        //
    }

    /**
     * Delete a resource
     *
     * @param \Radiate\Http\Request $request
     * @param int $id
     * @return mixed
     */
    public function destroy(Request $request, int $id)
    {
        //
    }
}
```

The controller has `index`, `show`, `create`, `update` and `destroy` methods ready to use.

You can define a resource route to the controller like so:

```php
Route::resource('posts', Theme\Http\Controllers\PostController::class);
```

The following routes will be generated:

| Verb      | URI         | Action  |
| :-------- | :---------- | :------ |
| GET       | /posts      | index   |
| GET       | /posts/{id} | show    |
| POST      | /posts      | store   |
| PUT/PATCH | /posts/{id} | update  |
| DELETE    | /posts/{id} | destroy |
