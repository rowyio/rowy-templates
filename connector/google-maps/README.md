# Google Maps Connector cloud function

The Google Maps Connector utilizes the **Google Maps library** to fetch locations based on the query provided, and returns the results as options in the column fields.

## Step by step instructions for using this connector

- Create a column with the type `Connector` and paste the function in the `main.ts` file.
- Use the configuration settings from the `config.json` file.
- In the function, pass the query as parameters in the URL.

## Additional reference links

- [Connectors Demo Table](https://demo.rowy.io/table/connectors)