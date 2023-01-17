const extensionBody: PushNotificationBody = async ({ row, db, change, ref }) => {
    // you can FCM token from the row or from the user document in the database
    // const FCMtoken = row.FCMtoken
    // or push through topic  
    const topicName = 'industry-tech';
    // you can return single or array of notification payloads
    return [{
        notification: {
            title: 'Hello!',
        },
        android: {
            notification: {
                imageUrl: 'https://thiscatdoesnotexist.com/'
            }
        },
        apns: {
            payload: {
                aps: {
                    'mutable-content': 1
                }
            },
            fcm_options: {
                image: 'https://thiscatdoesnotexist.com/'
            }
        },
        webpush: {
            headers: {
                image: 'https://thiscatdoesnotexist.com/'
            }
        },
        // topic: topicName, // add topic send to subscribers
        // token: FCMtoken // add FCM token to send to specific user
    }]
}