const extensionBody: SendgridEmailBody = async({row, db, change, ref}) => {
  
    // email everytime a new user is created, send them a welcome email
    // simply add the sendgrid template id, 
    // and the row's name/email fields accessible using row.<fieldname>
  
    // feel free to add your own code logic here
    
    return ({
      from: "Name<example@domain.com>",   // send from field
      personalizations: [
          {
              to: [{ name: row.firstName, email: row.email }],  // recipient
              dynamic_template_data: {
              },  // template parameters
          },
      ],
      template_id: "",    // sendgrid template ID
      categories: [], // helper info to categorise sendgrid emails
      custom_args:{
        docPath:ref.path, // optional, reference to be used for tracking email events
        // add any other custom args you want to pass to sendgrid events here
      },
    })
  }