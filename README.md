# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Architectural Methodology

Feature-Sliced ​​Design (FSD) is an architectural methodology for designing frontend applications. The main goal of the methodology is to make the project understandable and structured, especially in the face of regularly changing business requirements.


### Layers


Layers are standardized across all FSD projects. You don't have to use all the layers, but their names are important. There are currently seven of them (from top to bottom):

1) App* — everything that makes the application run — routing, entry points, global styles, providers, etc.
2) Processes (deprecated) — complex cross-page scenarios.
3) Pages — full pages or large parts of a page with nested routing.
4) Widgets — large self-contained chunks of functionality or interface, usually implementing an entire user scenario.
5) Features — reusable implementations of entire product features, i.e. actions that bring business value to the user.
6) Entities — business entities that the project works with, such as user or product.
7) Shared* — reusable code, especially when it is separated from the specifics of the project/business, although this is not necessary.

\* — these layers, App and Shared, unlike other layers, do not have slices and consist of segments directly.

### Slices

Next come slices, which divide the layer by subject area. You can name your slices whatever you want and create as many of them as you want. Slices help you stay organized in your project because they group closely related code.

Slices cannot use other slices on the same layer, which ensures strong cohesion within a slice and weak coupling between slices.

### Segments

Slices, as well as the App and Shared layers, are made up of segments, and segments group code by purpose. Segment names are not fixed by the standard, but there are several common names for the most common purposes:

* ui — everything related to display: UI components, date formatters, styles, etc.
* api — interaction with the backend: query functions, data types, mappers.
* model — data model: validation schemes, interfaces, storages and business logic.
* lib — library code that is needed by other modules of this slice.
* config — configuration files and feature flags.

Typically these segments are sufficient for most layers, so you'll typically only create your own segments in Shared or App, but this isn't a hard and fast rule.