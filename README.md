# Journal d'une Todo

Designed to show off my work and allow me to flirt with NextJs

## Clone

Clone this repo to your local machine using

```bash
git clone git@github.com:Zesysy/todo-list-react.git
```

## Prerequisites

- npm 6.14.4

## Getting Started

1.  `npm install`
2.  `npm start`

![Application view](/src/assets/appView.png)

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

## Folder Hierarchy

- `/node_modules` : is the folder where all the dependencies are installed. Don't touch this
- `/public`
- `/src` : where all the code is, this is the folder who get all our interest here.

## `/src`

### Folders

- `/actions` : Contains actions and their types
- `/assets` : You will find the img
- `/components` : All my components are here: Button, Heading, CommonForm...
- `/containers` :All my containers, without style, which call the components : SignUp, Todos...
- `/data` : Group the different texts used by common components
- `/firebase` : Firebase configuration folder, where the Api key is located
- `/reducers` : Contains all reducers
- `/style` : Groups files containing styled components

### Files

- `index.js`: Is the application's entry point
- `App.js` : Call area of all components
- `Router.jx`: Is the application's entry point
- `store.js`: Is the application's entry point

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

- [Sylène](https://github.com/Zesysy) - Developer front-end
