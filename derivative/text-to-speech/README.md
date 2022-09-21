# Google Text-to-Speech cloud function

Cloud function that uses Google Text-to-Speech API to convert a given text to a speech audio file.

## Step by step instructions for using this derivative function

- Listener field(s) type: Text field, Percentage field
- Output field type: Audio field
- To use any Google Cloud API, first enable [Cloud Text-to-Speech API](https://console.cloud.google.com/apis/api/texttospeech.googleapis.com)
- Add the [ISO code](https://cloud.google.com/translate/docs/languages) of the language you want to translate the text to Line 9:
`const languageCode = 'fr-FR';`