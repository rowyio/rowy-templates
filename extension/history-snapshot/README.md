# History Snapshot cloud function

The History Snapshot extension is used for documenting field changes in the form of updations and deletions, and recording them in Firestore Collections.

## Step by step instructions for using this derivative function

- Trigger event: update, delete
- Required field(s) if any: row
- Trigger condition if any: n/a
- To integrate History Snapshot in a particular project, pass the columns to be monitored as parameters to the function. Every time a field gets updated or deleted, the extension creates a document recording the changes in the Firestore Collection.

## Additional reference links
- [What to Watch](http://demo.rowy.io/table/imageGenerationTemplates#tableModal=%22extensions%22) - Rowy Demo Table