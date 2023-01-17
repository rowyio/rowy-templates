# MeiliSearch Connector cloud function

The MeiliSearch Connector lets the users utilize the MeiliSearch search engine to post queries and receive the desired response as options.

## Step by step instructions for using this connector

- Create a column with the type `Connector` and paste the function in the `main.ts` file.
- Use the configuration settings from the `config.json` file.
- Inside the function, include your query in the body of the API call. Results are available as options in the column fields.

## Additional reference links

- [Connectors Demo Table](https://demo.rowy.io/table/connectors)