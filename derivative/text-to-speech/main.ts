const derivative: Derivative = async ({ row, ref, db, storage, auth }) => {
    // Imports the Google Cloud client library
    const textToSpeech = require('@google-cloud/text-to-speech');
    // Creates a client
    const client = new textToSpeech.TextToSpeechClient();
    // The text to synthesize
    const text = row.frenchTranslation;
    // Construct the request
    const languageCode = 'fr-FR';  // list of options here : https://cloud.google.com/text-to-speech/docs/voices
    const ssmlGender = 'NEUTRAL';
    const speakingRate = row.speakingRate;
    const request = {
        input: { text },
        // Select the language and SSML voice gender (optional)
        voice: { languageCode, ssmlGender },
        // select the type of audio encoding
        audioConfig: {
            audioEncoding: 'MP3',
            speakingRate
        },
    };

    const fileName = `${languageCode}_${ssmlGender}x${speakingRate}.mp3`
    // Performs the text-to-speech request
    const [response] = await client.synthesizeSpeech(request);
    const bucket = storage.bucket();
    const file = bucket.file(`translations-audio/${ref.id}/file/${fileName}`);
    const uuid = require("uuid");
    const token = uuid.v4();
    await file.save(response.audioContent, {
        metadata: {
            contentType: "audio/mp3",
            metadata: { firebaseStorageDownloadTokens: token }
        }
    });
    return [{
        downloadURL: `https://firebasestorage.googleapis.com/v0/b/${bucket.name
            }/o/${encodeURIComponent(file.name)}?alt=media&token=${token}`,
        name: fileName,
        type: "audio/mp3",
        lastModifiedTS: Math.floor(new Date().getTime() / 1000)
    }]

}