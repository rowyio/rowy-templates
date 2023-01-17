const extensionBody: SlackMessageBody = async ({ row, db, change, ref }) => {
    // feel free to add your own code logic here

    return ({
        channels: [],    // a list of slack channel IDs in string
        blocks: [],    // the blocks parameter to pass in to slack api
        text: "",    // the text parameter to pass in to slack api
        attachments: [],    // the attachments parameter to pass in to slack api
    })
}