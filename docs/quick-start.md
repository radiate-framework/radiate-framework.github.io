# Quick Start

This guide is a step-by-step to get you started with a Radiate project.

We are going to focus on making a plugin, but a theme will work in exactly the same way.

Our plugin will be for a members only service that will feature:

- Authentication
- Routing
- Templates
- Shortcodes
- Mail

## Install The Plugin

```bash
composer create-project radiate/plugin members-only
```

## Scaffolding

Here we will generate the bulk of our plugin files using Radiate's `cli`.

```bash
# make the controllers
wp radiate make:controller Auth\\RegisterController
wp radiate make:controller Auth\\PasswordResetController
wp radiate make:controller Auth\\LoginController
wp radiate make:controller Auth\\ForgotPasswordController

# make the middleware
wp radiate make:middleware Role

# make the mailables
wp radiate make:mail ConfirmRegistration
wp radiate make:mail ResetPassword
```

## Publish the Mail Templates

```bash
wp radiate vendor:publish --tag=mail
```

## The LoginController

```php
<?php

namespace Theme\Http\Controllers\Auth;

use Radiate\Foundation\Http\Exceptions\HttpResponseException;
use Radiate\Http\Request;
use Radiate\Routing\Controller;

class LoginController extends Controller
{
    /**
     * Handle the controller action
     *
     * @param \Radiate\Http\Request $request
     * @return mixed
     */
    public function __invoke(Request $request)
    {
        if (Auth::login($request, $request->remember)) {
            return 'logged in';
        }

        throw new HttpResponseException('Failed to log in', 401);
    }
}
```
