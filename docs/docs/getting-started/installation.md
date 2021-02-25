# Installation

The Radiate framework can be used in either a theme or a plugin. The framework for both is the same to make it easy to achieve the same things in both.

Radiate utilizes `composer` for installation of the theme or plugin, and class autoloading.

## Installing the Theme

If you are building a theme, navigate to the themes directory of your project:

```
composer create-project radiate/theme theme-name
```

## Installing the Plugin

If you're building a plugin, navigate to the plugins directory and run:

```
composer create-project radiate/plugin plugin-name
```

<AppNotice type="warning">

Running a Radiate theme and plugin at the same time will cause unexpected behaviour. It is recommended to use only one per project or to use `mozart` or `php-scoper` to prefix your namespaces.

</AppNotice>
