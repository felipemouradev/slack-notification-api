'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.group(() => {
  Route.get('/message/send', 'SlackController.sendMessage');
  Route.get('/message/success', 'SlackController.sendMessageSuccess');
  Route.get('/message/error', 'SlackController.sendMessageError');
  Route.get('/message/warning', 'SlackController.sendMessageWarning');
}).prefix('api/slack');

Route.group(() => {
  Route.get('/', 'NotificationController.getAllNotifications');
  Route.put('/:id/edit', 'NotificationController.update');
  Route.post('/:idOrSlug/send', 'NotificationController.sendNotification');
  Route.post('/create', 'NotificationController.create');
}).prefix('api/notification');
