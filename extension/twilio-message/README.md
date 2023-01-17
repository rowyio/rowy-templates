# Twilio Message cloud function

The Twilio Message extension allows you to send SMS or Whatsapp messages using Twilio. We can customize the extension to send a personalized message, or trigger the function when a new row is added in the table or when a row is updated.

## Step by step instructions for using this derivative function

- Trigger event: create
- Required field(s) if any: text, sender's phone number, recipient's phone number
- Trigger conditions if any: n/a
- Setup Twilio account and generate the API key from the [twilio console](https://console.twilio.com/). Add it to Google [Secret manager](https://console.cloud.google.com/security/secret-manager) under `twilio` name.

    ### Secret Value
    ```json
    {
    "appId": "YOUR_ALGOLIA_APP_ID",
    "adminKey": "YOUR_ALGOLIA_ADMIN_KEY",
    "searchKey": "YOUR_ALGOLIA_SEARCH_KEY"
    }
    ```

## Additional reference links

- Twilio documentation: https://www.twilio.com/docs

- Twilio console: https://console.twilio.com/