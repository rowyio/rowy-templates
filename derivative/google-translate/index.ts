const derivative: Derivative = async ({ row, ref, db, storage, auth }) => {
    const text = row.text
    if (text.length > 500) throw Error("Text is too long for this demo")
    const { Translate } = require('@google-cloud/translate').v2;
    // Instantiates a client
    const translate = new Translate();
    // set target language using	ISO-639-1 Code
    // full list here : https://cloud.google.com/translate/docs/languages
    const targetLanguage = 'fr'
    // Translates text column into traget language
    const [translation] = await translate.translate(text, targetLanguage);
    return translation;
  }