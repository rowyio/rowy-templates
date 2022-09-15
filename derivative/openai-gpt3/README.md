# OpenAI GPT-3 cloud function

Cloud function that uses OpenAI's GPT-3 API and generates an emoji for a given text/movie name

## Step by step instructions for using this derivative function

- Listener field(s) type: Text field
- Output field type: Text field
- To use OpenAI GPT-3 API, first setup an account on [OpenAI](https://openai.com/) and generate a API secret
- Store the API secret key on your Google Cloud project's [Secret manager](https://console.cloud.google.com/security/secret-manager) under "openai" name
