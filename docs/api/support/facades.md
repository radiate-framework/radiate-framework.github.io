# Radiate\Support\Facades

A `Facade` is a static interface to a class that is bound to the [service container](./service-container).

Radiate provides Facades to almost all of it's features for an elegant, fluid API.

| Facade    | Class                                              | Service Container Binding |
| --------- | -------------------------------------------------- | ------------------------- |
| App       | Radiate\Foundation\Application                     | `app`                     |
| Auth      | [Radiate\Auth\AuthManager](/api/auth/auth-manager) | `auth`                    |
| Config    | Radiate\Config\Repository                          | `config`                  |
| Event     | Radiate\Events\Dispatcher                          | `events`                  |
| File      | Radiate\Filesystem\Filesystem                      | `files`                   |
| Mail      | Radiate\Mail\Mailer                                | `mailer`                  |
| Request   | [Radiate\Http\Request](/api/http/request)          | `request`                 |
| Route     | Radiate\Routing\Router                             | `router`                  |
| Validator | Radiate\Validation\Factory                         | `validator`               |
| View      | [Radiate\View\Factory](/api/view/factory)          | `view`                    |
