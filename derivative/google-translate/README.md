# Google Translate cloud function

Cloud function that uses Google Cloud Translate using NPM module to convert a given text string to select language of choice.

## Step by step instructions for using this derivative function

- Listener field(s) type: Text field
- Output field type: Text field
- To use any Google Cloud API, first enable [Cloud Translation API](https://console.cloud.google.com/apis/library/translate.googleapis.com)
- Add the [ISO code](https://cloud.google.com/translate/docs/languages) of the language you want to translate the text to Line 9:
`const targetLanguage = 'fr'`

## Additional reference links

- [Translations](https://demo.rowy.io/table/translations) - Rowy Demo Table