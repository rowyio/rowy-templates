const extensionBody: TwilioMessageBody = async ({ row, db, change, ref }) => {
    /** 
      * 
      * Setup twilio secret key: https://docs.rowy.io/extensions/twilio-message#secret-manager-setup
      * 
      * You can add any code logic here to be able to customize your message
      * or dynamically get the from or to numbers
      * 
     **/

    return ({
        from: "", // from phone number registered on twilio
        to: "", // recipient phone number - eg: row.<fieldname>
        body: "Hi there!" // message text
    })
}