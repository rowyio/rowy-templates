# Push Notifications cloud function

The Push Notifications extension utilizes the **Firebase Cloud Messaging service** to send data payloads (via a message) to a device for a specfic application.

## Step by step instructions for using this derivative function

- Trigger event: create, update
- Required field(s) if any: row
- Trigger condition if any: n/a
- The Push Notifications extension can be included in a Row project by passing the payloads field as arguements to the function. Thereby, payloads are sent to the device associated with the respective FCM token.

## Additional reference links
- [Firebase Cloud Messaging](https://firebase.google.com/docs/cloud-messaging) - For more details on Firebase Cloud Messaging.