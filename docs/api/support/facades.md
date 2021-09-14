# Radiate\Support\Facades

A `Facade` is a static interface to a class that is bound to the service container.

Radiate provides Facades to almost all of it's features for an elegant, fluid API.

| Facade        | Class                                                      | Service Container Binding |
| ------------- | ---------------------------------------------------------- | ------------------------- |
| App           | Radiate\Foundation\Application                             | `app`                     |
| Auth          | [Radiate\Auth\AuthManager](/api/auth/auth-manager)         | `auth`                    |
| Cache         | Radiate\Cache\Repository                                   | `cache`                   |
| Config        | Radiate\Config\Repository                                  | `config`                  |
| Crypt         | Radiate\Encryption\Encryptor                               | `encrypter`               |
| DB            | Radiate\Database\DatabaseManager                           | `db`                      |
| DB (Instance) | Radiate\Database\Connection                                | `db.connection`           |
| Event         | Radiate\Events\Dispatcher                                  | `events`                  |
| File          | Radiate\Filesystem\Filesystem                              | `files`                   |
| Gate          | Radiate\Auth\Access\Gate                                   | `gate`                    |
| Http          | Radiate\Http\Client\Factory                                |                           |
| Mail          | Radiate\Mail\Mailer                                        | `mailer`                  |
| Request       | [Radiate\Http\Request](/api/http/request)                  | `request`                 |
| Route         | Radiate\Routing\Router                                     | `router`                  |
| Url           | [Radiate\Routing\UrlGenerator](/api/routing/url-generator) | `url`                     |
| Validator     | Radiate\Validation\Factory                                 | `validator`               |
| View          | [Radiate\View\Factory](/api/view/factory)                  | `view`                    |
