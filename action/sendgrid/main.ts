const action: Action = async ({ row, ref, db, storage, auth, actionParams, user }) => {

    const sendgridSecret = await rowy.secrets.get("sendgrid")
    const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + sendgridSecret,
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            asm: {
                // group_id: 0000 Unsubscribe group id
            },
            from: { name: "Sender Name", email: "you@company.com" },
            personalizations: [
                {
                    to: [{ name: row.name ? row.name : "", email: row.email }],  // recipient
                    dynamic_template_data: {
                    },  // template parameters
                },
            ],
            template_id: "TEMPLATE_ID",    // sendgrid template ID
            //categories: [], // helper info to categorise sendgrid emails
            custom_args: {
                docPath: ref.path,
                // optional, reference to be used for tracking email events
                // add any other custom args you want to pass to sendgrid events here
            }
        })
    })

    if (res.ok) {
        return {
            success: true,
            message: `Emailed ${row.name}`
        }
    }
    const resData = await res.json()
    if (resData.errors) {
        return {
            success: false,
            message: resData.errors
        }
    }
}