# Sendgrid Action cloud function

The Sendgrid Action utilizes the sendgrid API to send emails from the account provided.

## Step by step instructions for using this connector

- Create a column with the type `Action` and paste the function in the `main.ts` file.
- Use the configuration settings from the `config.json` file.
- Add your sendrid API key to [Secret Manager](https://console.cloud.google.com/security/secret-manager/), and [verify](https://docs.sendgrid.com/for-developers/sending-email/sender-identity) the sender email address on Sengrid.

## Additional reference links

- [Action Field Documentation](https://docs.rowy.io/field-types/action)