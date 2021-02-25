# Introduction

## What Is Radiate?

Radiate is a [WordPress](https://wordpress.org/) theme and plugin framework designed for super fast project scaffolding so you can get up and running as soon as possible.

Heavily inspired by [Laravel](https://laravel.com/), Radiate is a lightweight framework with fluent APIs for working with WordPress in an object-oriented way.

Radiate makes use of a [service container](/docs/advanced/container) to manage the application's services, [inject dependencies](/docs/advanced/dependency-injection) into your classes, [register services](/docs/advanced/service-providers) and [vendor packages](/docs/advanced/vendor-packages) and resolve the app [middleware](/docs/advanced/middleware).

Radiate also comes with a command-line interface built around [`wp-cli`](https://wp-cli.org/) to make scaffolding your project fast.

## Requirements

Radiate has been designed to have as few dependencies and requirements as possible whilst making development fun and fast.

### Composer

[Composer](https://getcomposer.org/) is a dependency manager for PHP.

Radiate uses Composer to install the framework, add packages, and to autload the classes required for your project.

### wp-cli

The [WordPress CLI](https://wp-cli.org/) is key to quick development with Radiate - many helpful commands have been created for generating classes and publishing vendor files.

It is possible to develop a theme or plugin without the CLI but you miss out on a lot of the time-saving commands.
