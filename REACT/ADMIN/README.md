# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Run the project

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


### Create React App
Create React app “admin” by default javascript
`npx create-react-app admin`
Create react app “admin” with typescript
`npx create-react-app admin --template typescript`
### Install React router (for <BrowserRouter>)
`npm install react-router-dom`
### Install material Ui
`npm install @mui/material`
`npm i @material-ui/core`??



### Prerequisites to run this project
# Install react scripts
npm i react-scripts --save --force



### Fix the upstream dependency conflict, or retry
When encountering an upstream dependency conflict, you can try the following steps:

Step 1: Update npm
`npm install -g npm@latest`

Step 2: Clean the npm cache
`npm cache clean --force`

Step 3: Delete node_modules and package-lock.json
`rm -rf node_modules`
`rm package-lock.json`

Step 4: Install dependencies with --force or --legacy-peer-deps
`npm install --force`
or
`npm install --legacy-peer-deps`


Step 5: Update dependencies

bash
npm update


If none of these steps resolve the issue, you may need to manually resolve the dependency conflict by adjusting the versions of the conflicting dependencies in your package.json file.

You can also try using --force or --legacy-peer-deps flags with npm install to bypass peer dependency conflicts.

If you're still experiencing issues, provide more details about the error message you're seeing, and I'll do my best to help you troubleshoot.