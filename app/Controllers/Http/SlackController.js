const SlackService = use('App/Services/Slack');

class SlackController {

  async sendMessage({request}) {
    return await SlackService.sendMessage(request._qs.message);
  }

  async sendMessageSuccess({request}) {
    return await SlackService.successMessage({message: request._qs.message, title: request._qs.title});
  }

  async sendMessageError({request}) {
    return await SlackService.errorMessage({message: request._qs.message, title: request._qs.title});
  }

  async sendMessageWarning({request}) {
    return await SlackService.warningMessage({message: request._qs.message, title: request._qs.title});
  }
}

module.exports = SlackController;
