'use strict';
const Notification = use('App/Models/Notification');
const SlackNotificationService = use('App/Services/SlackNotifications');

class NotificationController {

  async create({request, response}) {
    const notification = request.body;
    response.json(await Notification.createNotification(notification));
  }

  async update({request, response}) {
    const notification = await Notification.find(request.params.id);
    let updated = null;
    if (notification) {
      updated = await Notification.where({_id: request.params.id}).update({
        messageData: request.body.messageData || notification.messageData,
        templateName: request.body.templateName || notification.templateName
      });
    }
    response.json(updated);
  }

  async sendNotification({request, response}) {
    response.json(await SlackNotificationService.sendNotification(request.params.idOrSlug, request.body));
  }

  async getAllNotifications({request, response}) {
    let allNotifications = await Notification.fetch();
    let notificationsArray = allNotifications.toJSON();
    notificationsArray = notificationsArray.map((notification) => {
      const {_id, messageData, created_at} = notification;
      const availableVariables = messageData.match(/{{\s*[\w\.]+\s*}}/g)
        .map(function (x) {
          return x.match(/[\w\.]+/)[0];
        });
      return {_id, availableVariables, created_at}
    });
    response.json(notificationsArray);
  }
}

module.exports = NotificationController;
