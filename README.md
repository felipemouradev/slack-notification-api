# Slack Notification API

This project is an a wrapper for slack sdk.

It was done with the intention of sending notifications through previously saved message schemas in this API.

```
[POST] /api/notification {
	"templateName": "template message 1",
	"messageData": {
		"text": "Loggin {{user}}",
    	"attachments": [
	        {
	          "color": "{{var_color}}",
	          "text": "{{message}}"
	        }
    	]
	}
}
```