# AI Alt Text Generator cloud function

Cloud function that uses **Carrot**, the state-of-the-art vision-language model by **banana-dev** to generate alt text for an image.

## Step by step instructions for using this derivative function

- Listener field(s) type: Image field
- Output field type: Text field
- To use this API, follow the steps on the [Pre-trained Carrot Model page](https://www.banana.dev/pretrained-models/nodejs/carrot) and set up an API key.
- Store the API key in the Google Cloud Secret Manager with the name `banana`.

## Additional reference links

- [Carrot Modal](https://www.banana.dev/pretrained-models/nodejs/carrot) - banana-dev
- [Image Alt Text](https://demo.rowy.io/table/readAImage) - Rowy Demo Table