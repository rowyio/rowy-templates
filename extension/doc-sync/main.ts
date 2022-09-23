const extensionBody: DocSyncBody = async ({ row, db, change, ref }) => {
    // feel free to add your own code logic here

    return ({
        fieldsToSync: [],    // a list of string of column names
        row: row,    // object of data to sync, usually the row itself
        targetPath: "",  // fill in the path here
    })
}