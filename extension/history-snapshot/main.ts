const extensionBody: HistorySnapshotBody = async ({ row, db, change, ref }) => {
    // feel free to add your own code logic here

    return ({
        trackedFields: [],    // a list of string of column names
        collectionId: "historySnapshots",    // optionally change the sub-collection id of where the history snapshots are stored
    })
}