# Journal d'une Todo

A Todo management application in React & Redux, with an authentication part with Firebase, and the discovery of a library of Styled Components styles

## Prerequisites

- npm 6.14.8

## Clone

Clone this repo to your local machine using

```bash
git clone git@github.com:Zesysy/todo-list-react.git
```

## Getting Started

1. `npm install` # Install all dependencies
2. `npm start`  # Runs the dev environment

![Application view](/src/assets/appView.png)

## Environment variable 

**_ for this project, you need to create a `.env` with those fields _**

`REACT_APP_APIKEY = Key to your API`

## Built With

- [ReactJs](https://reactjs.org/) - The web framework (library) used
- [React-Router-Dom](https://reacttraining.com/react-router/web/guides/quick-start) - Declarative routing for React
- [React-Redux](https://react-redux.js.org/) - Easy redux management (therefore of the store and actions)
- [React-Redux-Firebase](http://react-redux-firebase.com/) - Redux bindings for Firebase.
- [Firebase](https://firebase.google.com/docs?authuser=0) - Allows efficient management of user authentication
- [Formik](https://jaredpalmer.com/formik) - Build forms in React
- [Yup](https://github.com/jquense/yup) - JavaScript schema builder for value parsing and validation
- [PropTypes](https://github.com/facebook/prop-types) - Runtime type checking for React props
- [Styled Components](https://styled-components.com/) - Allow to write actual CSS code to style the components

### Architecture

```bash
node_modules # folder where all the dependencies are installed. Don't touch this
public
src
├──components
    └── actions # Contains actions and their types
    └── assets # You will find the img
    └── components # All my components are here# Button, Heading, CommonForm...
    └── containers #All my containers, without style, which call the components : SignUp, Todos...
    └── data # Group the different texts used by common components
    └── firebase # Firebase configuration folder, where the Api key is located
    └── reducers # Contains all reducers
    └── style # Groups files containing styled components
├──index.js # Is the application's entry point
├──App.js  # Call area of all components
├──Router.jsx # Is the application's entry point
├──store.js # Is the application's entry point
```

## Standards

- camelCase is the way to go here 🐫
- & PascalCase for component names

## Feature

- User registration
- Email verification
- Email and password recovery
- Modification and deletion of user profile
- Creation of Todos
- Modification and deletion of Todos

## Authors

- [Sylène](https://github.com/Zesysy) - Web developer