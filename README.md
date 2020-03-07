# What is it
The purpose of this app is to deliver accurate personalized information from trusted Canadian medical sources regarding COVID-19.

This service personalizes the information about the virus based on user's individual situation. All content is vetted by Canadian medical professionals. 

## Who is behind this project
The project is created by [Dialogue](dialogue.co). Dialogue is the leading Canadian telemedicine provider pioneering virtual healthcare dedicated exclusively to the world's leading organizations. We drive real health outcomes through amazing healthcare experiences, an employee engagement playbook, and a relentless focus on patient safety and security.


## How to contribute
We are very happy to receive and merge your contributions. Here are main ways to contribute to this project:
- *Keep content up to date.* This is the main way we see medical community contributing to this project. COVID-19 moves fast and information people need to know changes day by day. We welcome and appreciate input and updates from credible trusted sources such as gouvernment agencies, healthcare organizations and media.
- *Increase personalization.* This can be done by extending the rules of the bot, adding new classes of content, adding new questions, updating existing questions etc.
 

To contribute via pull request, follow these steps:
- Write your content. Make sure it follows the style of existing content.
- Create a pull request describing your changes
Your pull request will be reviewed by a maintainer, who will get back to you about any necessary changes or questions.

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

- Create a pull request and submit it.



## Running locally

In the project directory, you can run:

### `npm install`
Installs the dependencies.

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

