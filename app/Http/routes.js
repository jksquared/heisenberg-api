'use strict';

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route');

Route.on('/').render('welcome');

Route.post('/users', 'UserController.store');
Route.post('/token-auth', 'UserController.login');
Route.resource('/items', 'ItemController')
  .middleware('auth')
  .except(['create', 'edit']);

Route.resource('/durations', 'DurationController').except(['create', 'edit']);
