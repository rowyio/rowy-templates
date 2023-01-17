const extensionBody: TaskBody = async ({ row, db, change, ref }) => {
    // task extensions are very flexible you can do anything from updating other documents in your database, to making an api request to 3rd party service.

    // example:
    // we can post notification to different discord channels based on row data
    
    const topic = row.topic;
    const channel = await db.collection('discordChannels').doc(topic).get();
    const channelUrl = await channel.get("channelUrl");
    const content = "Hello discord channel";
      return fetch("https://discord.com/api/webhooks/"+channelUrl, {
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            content
          })
        }).then(async resp => {
          const result = await resp.json()
          if (resp.ok) console.info(result)
          else console.error(result)
        })
    
}