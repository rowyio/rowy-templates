# Slack Message cloud function

Slack message is an extension to send a message to a Slack channel everytime a new row is created.

## Step by step instructions for using this derivative function

- Trigger event: create
- Required field(s) if any: n/a
- Trigger conditions if any: n/a
- Setup a [Slack developer account](https://api.slack.com/) and create a new App. Generate and add the **Bot Token** and **Signing Key** to Google [Secret manager](https://console.cloud.google.com/security/secret-manager) under `slack` name.

    ### Secret Value
    ```json
    {
    "botToken": "YOUR_SLACK_BOT_TOKEN",
    "signingKey": "YOUR_SLACK_SIGNING_KEY"
    }
    ```

## Additional reference links

- Slack documentation: https://api.slack.com/
- The reference to **Secondary message attachments** to customize the message content: https://api.slack.com/reference/messaging/attachments