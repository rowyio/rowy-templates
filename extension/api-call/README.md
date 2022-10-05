# API Call cloud function

The API Call extension is used to fetch data from APIs in the form of json objects. The respective URL and headers for the API can be fed into the extension as parameters.

## Step by step instructions for using this derivative function

- Trigger event: create
- Required field(s) if any: row
- Trigger condition if any: n/a
- To integrate the API extension in a particular project, pass the fields referring to the url of the API, its headers and callback function as parameters to the function. Henceforth, the extension hits the url, fetches data and executes the callback function.