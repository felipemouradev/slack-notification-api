'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');
const slugify = use('slugify');

class Notification extends Model {
  static async createNotification(notification) {
    notification.slug = (slugify(notification.templateName, '_')).toUpperCase();
    notification.messageData = JSON.stringify(notification.messageData);
    return await Notification.create(notification);
  }
}

module.exports = Notification;
