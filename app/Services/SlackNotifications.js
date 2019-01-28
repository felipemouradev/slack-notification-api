const SlackService = use('App/Services/Slack');
const Notification = use('App/Models/Notification');
const Handlebars = use('handlebars');

class SlackNotifications {
  static async sendNotification(idOrSlug, variables) {
    try {
      const notificationFound = await Notification.where({
        $or: [
          {slug: idOrSlug},
          {_id: idOrSlug}
        ]
      }).first();
      if (notificationFound) {
        const objectNotification = notificationFound.toJSON();
        const messageData = objectNotification.messageData;
        const template = Handlebars.compile(messageData);
        const dataSend = template(variables);
        return await SlackService.sendMessage(JSON.parse(dataSend));
      }
      return {message: "not found"};
    } catch (e) {
      throw e;
    }
  }
}

module.exports = SlackNotifications;
