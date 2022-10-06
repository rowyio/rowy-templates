const extensionBody: BigqueryIndexBody = async ({ row, db, change, ref }) => {
    // feel free to add your own code logic here

    return ({
        fieldsToSync: [],    // a list of string of column names
        row: row,    // object of data to sync, usually the row itself
        index: "",    // algolia index to sync to
        objectID: ref.id,    // algolia object ID, ref.id is one possible choice
    })
}