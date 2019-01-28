const ENV = use('Env');

class SlackService {

  static getSlackInstance() {
    return SlackService.slackInstance = require('slack-notify')(ENV.get('SLACK_WEBHOOK_URL'));
  }

  static async sendMessage(msg) {
    try {
      console.log('message: ', msg);
      const result = await this.getSlackInstance().request(Object.assign(msg, {channel: "#devs"}));
      console.log(result);
      return {message: "Sent"}
    } catch (e) {
      //#TODO: Exception
      return {message: "Error"};
    }
  }

  static async successMessage({title, message}) {
    const messageData = {
      text: title || "Success Notification",
      attachments: [
        {
          color: "#36a64f",
          text: message,
        }
      ]
    };
    return await this.sendMessage(messageData);
  }

  static async errorMessage({title, message}) {
    const messageData = {
      text: title || "Error Notification",
      attachments: [
        {
          color: "#a60e0f",
          text: message,
        }
      ]
    };
    return await this.sendMessage(messageData);
  }

  static async warningMessage({title, message}) {
    const messageData = {
      text: title || "Warning Notification",
      attachments: [
        {
          color: "#e2e708",
          text: message,
        }
      ]
    };
    return await this.sendMessage(messageData);
  }

}

module.exports = SlackService;
