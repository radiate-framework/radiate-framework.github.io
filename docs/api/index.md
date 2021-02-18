# API Reference

## Facades

A `Facade` is a static interface to a class that is bound to the [service container](./service-container).

Radiate provides Facades to almost all of it's features for an elegant, fluid API.

| Facade | Class                          | Service Container Binding |
| ------ | ------------------------------ | ------------------------- |
| App    | Radiate\Foundation\Application | `app`                     |
| Auth   | Radiate\Auth\AuthManger        | `auth`                    |
| Event  | Radiate\Events\Dispatcher      | `events`                  |
| File   | Radiate\Filesystem\Filesystem  | `files`                   |
| Route  | Radiate\Routing\Router         | `router`                  |
| View   | Radiate\View\View              | `view`                    |
