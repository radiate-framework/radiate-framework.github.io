# Events

[[toc]]

## Introduction

WordPress has an events system in the form of actions and filters. `do_action` and `apply_filters` are the equivelent of dispatching an event. `add_action` and `add_filter` then correspond to listening to an event.

<AppNotice type="info">

WordPress actions and filters both use `WP_Hook` behind the scenes. The only difference is that filters MUST return a value.

</AppNotice>

The Radiate Events system is an advanced wrapper around `WP_Hook` so WordPress actions and filters can be used alongside `Events` and `Listeners`. Gone are the days of wondering where to place an `add_action` callback.

`Events` are stored in `app/Events` whilst Listeners`are stored in`app/Listeners`.

## Radiate Commands

Radiate has commands for generating `Events`, `Listeners` and `Subscribers`.

### Creating An Event

```
wp radiate make:event OrderShipped
```

### Creating A Listener

```
wp radiate make:listener SendShipmentNotification
```

### Creating A Subscriber

```
wp radiate make:subscriber WooCommerceTemplateSubscriber
```

## Listening To An Event

Listening to an event is as simple as calling the `listen` method on the `Events` facade.

It's possible to listen to a WordPress action/filter:

```php
Event::listen('plugins_loaded', function() {
    //
});
```

Or listen to a custom `Event`:

```php
Event::listen(App\Events\OrderShipped::class, function() {
    //
});
```

## The Event Service Provider

The `EventServiceProvider` helps keep all your event logic in one place.

```php
use App\Events\OrderShipped;
use App\Listeners\SendShipmentNotification;

/**
* The event listener mappings for the application.
*
* @var array
*/
protected $listen = [
    OrderShipped::class => [
        SendShipmentNotification::class,
    ],
];
```

## Event Subscribers

```php
use App\Listeners\WooCommerceTemplateSubscriber;

/**
* The event subscribers mappings for the application.
*
* @var array
*/
protected $subscribers = [
    WooCommerceTemplateSubscriber::class,
];
```

## Subscribers

Subscribers enable related logic to be kept together. For example, if you're listening to multiple WooCommerce actions, it makes more sense to have one subscriber handle the logic rather than creating multiple listeners.

```php
namespace App\Listeners;

use Radiate\Events\Dispatcher;

class WooCommerceTemplateSubscriber
{
    public function handle(Dispatcher $events)
    {
        $events->listen('woocommere_init', [$this, 'wooCommerceInit']);
        $events->listen('woocommere_start_body', [$this, 'wooCommerceStartBody']);
        $events->listen('woocommere_end_body', [$this, 'wooCommerceEndBody']);
    }

    public function wooCommerceInit()
    {
        //
    }

    public function wooCommerceStartBody()
    {
        //
    }

    public function wooCommerceEndBody()
    {
        //
    }
}
```

## Dispatching An Event

```php
use App\Events\OrderRecieved;

$order = new Order();

Event::dispatch(new OrderRecieved($order))
```

Using the `Dispatchable` trait:

```php
use App\Events\OrderRecieved;
use App\Services\Order;

OrderRecieved::dispatch(new Order());
```
