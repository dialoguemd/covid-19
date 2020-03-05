# covid-19
Client-side chatbot questionnaire to evaluate and inform user on their COVID-19 risk

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`
Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


# Rules
Defining rules is handled by [json-rules-engine](https://github.com/cachecontrol/json-rules-engine).

- [Documentation](https://github.com/CacheControl/json-rules-engine/tree/master/docs)
- [Examples](https://github.com/CacheControl/json-rules-engine/tree/master/examples)
- [Walkthrough](https://github.com/CacheControl/json-rules-engine/blob/master/docs/walkthrough.md)

## Definitions
- `Facts` are the values collected through the chat
- `Rules` are the evaluation of those facts
- `Results` are generated from the rules being applied to those facts

## Adding rules

### Globally
Add them to `rules/global.json`

### On Step
They can also be defined on a step directly under metadata. Step-defined rules will only be applied if that step was rendered.

e.g.
```
steps={[
  {
    id: '1',
    message: 'Pick a number',
    trigger: '2',
    metadata: {
      rule: {
        "conditions":{...},
        "event":{...}
      }
    }
  },
  ...
]}
```
