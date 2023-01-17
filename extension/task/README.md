# Task cloud function

The task extensions are extremely flexible. It can be used to do anything from updating other documents in your database, to making an api request to 3rd party service.

The given example enables users to post notifications to a Discord channel. The extension is triggered when a new row is created.

## Step by step instructions for using this derivative function

- Trigger event: create
- Required field(s) if any: topic
- Trigger condition if any: n/a
- Refer the [Discord guide](https://discordjs.guide/popular-topics/webhooks.html#creating-webhooks-through-server-settings) 
for information on how to set up webhook URL for the server/ channel you wish to post the message to. 
