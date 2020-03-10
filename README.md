# Canada COVID-19 Bot
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org) [![CircleCI](https://circleci.com/gh/dialoguemd/covid-19.svg?style=svg)](https://circleci.com/gh/dialoguemd/covid-19)

See project wiki at https://github.com/dialoguemd/covid-19/wiki

The purpose of this app is to deliver accurate personalized information from trusted Canadian medical sources regarding COVID-19.

This service personalizes the information about the virus based on user's individual situation. All content is vetted by Canadian medical professionals.

## Who is behind this project
The project is created by [Dialogue](https://dialogue.co). Dialogue is the leading Canadian telemedicine provider pioneering virtual healthcare dedicated exclusively to the world's leading organizations. We drive real health outcomes through amazing healthcare experiences, an employee engagement playbook, and a relentless focus on patient safety and security.


## How to contribute

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## Content structure
The structure of this project is based on the following concepts:
- The chatbot is composed of *steps*. Steps are chained. Each step specifies the next step. A step with a question (eg. "dDo you have fever?" is followed by a step with a set of options (eg. Yes or No). The user selects an option and the system records a new *fact* (eg. Fever:Yes).
- All facts are used as input to the rules engine. The *rules* are used to classify the set of facts into *classes*. For example, if there is a rule that states that if the facts include Fever:Yes, then this set of facts must be classified as "high-risk".
- Each *class* represents a set of *content files*. Each class has it's own subdirectory under `src/content` directory. A content file is a Markdown file that has a title, body and a source. A file name of the content file must be in the form `filename.{language-code}.md`.

## How add new content
The content served to uses is stored in text files in `https://github.com/dialoguemd/covid-19/tree/master/src/content`.

The files are placed in sub-sirectories. Each sub-directory corresponds to a "content class". A content class is a collection of content that will be served to all users that belong to a class. Which class a user belongs to is determined by the answers they provide.

All content files follow the Markdown format.


To add a new content file, do the following:
- Determine which class your content file belongs to.
- Create a new .md file and add content in it
- Make sure to follow this format:

```
## Title

Your content goes here

[Source](https://link-to-the-source-of-the-content)

```

- Make sure the last line in your file needs to be blank.
- Create a pull request and submit it.

## How to add new classes of content



## Running locally

In the project directory, you can run:

### `npm install`
Installs the dependencies.

### `npm start`
Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm run build`
Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

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
```js
steps = [
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
]
```

