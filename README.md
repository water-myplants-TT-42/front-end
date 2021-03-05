# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

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

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Project explanation

Components

    Home.js

    This is a basic home page which prompts the user to either log in to an already existing account or to sign up in order to access the other routes within the website

    LoginForm.js/SignUpForm.js/EditUserForm.js/PlantForm.js

    These are all forms structured to take inputs for user data(login/signup/edituser) and Plant data(plant).
    The values taken from these inputs are then posted into the backend.

    Navbar.js

    The navbar allows the user to quickly navigate between routes.
    These routes change based off of conditional rendering checking if the userID === null, else it considers the user authenticated.

    PlantCard.js

    Returns styled components which take in a plant_id and populate PlantList

    DeleteModal.js

    Returns a function that will handle a click event and delete a plant from PlantList. This removes the card from display and the plant_id which is attached to the user data.

    Plant.js

    This is a file that consists of dummy data which was used during display testing. This will be deleted when the backend is implemented.

    PlantList.js

    Imports plantcard.js/deletemodal.js and populates a container with plants based off of the plant_id(s) which are connected to a user's information. You can view/delete plants from this list. Plants are added to this list by PlantForm.js.

    Styled
        theme.js
            Set constant values for css across the entire app. Colors, image sizes, button sizes, etc.
        Global.js
            Removes defaults and sets standards for sizing and formatting throughout the app.
        Container.js
            Sets basic css formatting and props for containers
        Form.js
            Sets basic css formatting and props for forms
        Image.js
            Sets basic css formatting and props for images
        Input.js
            Sets basic css formatting and props for inputs
        InputLabel.js
            Sets basic css formatting and props for input labels

## Attribution

Icons made by [Freepik](https://www.freepik.com "Freepik") from [www.flaticon.com](https://www.flaticon.com/ "Flaticon")

[Plant Icon](https://www.flaticon.com/free-icon/plant_628324)
[User Icon](https://www.flaticon.com/free-icon/user_1946429)
