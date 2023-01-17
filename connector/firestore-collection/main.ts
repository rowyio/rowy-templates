const firestoreCollectionConnector: Connector = async ({ db, query, row, user }) => {
    // 1️⃣ Edit Collection: connect to Firestore collection
    const collectionId = "lwjShow"
    // 2️⃣ set max results you want to show in the dropdown
    const maxResults = 5
    // 3️⃣ Edit field: connect to Firestore field to filter by in the input text
    const queryField = "noun"
    // Map result: use as it is or shape the returned data as need
    const resultsFormatter = (doc) => ({ id: doc.id, snapshot: doc.data() })

    // Logic for data retrieval, no edits needed here
    const collectionRef = db.collection(collectionId).limit(maxResults)
    if (query === "") {
        return (await collectionRef.get()).docs.map(resultsFormatter)
    }
    const end = query.replace(/.$/, (c) => String.fromCharCode(c.charCodeAt(0) + 1));
    return (await collectionRef.where(queryField, ">=", query).where(queryField, "<", end).get())
        .docs.map(resultsFormatter)
};