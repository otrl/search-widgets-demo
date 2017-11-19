# otrl-search-widgets-demo

## Quick start

Installs dependencies and starts up a development server running the demo app:

```npm install && npm start```

## Guide

This demo shows 2 examples of how you can embed otrl-search-widgets in your site.

Before explaining the differences, you should note that they both share in common one thing: generation of CSS via webpack. That is not because this is the only way - you can use the less compiler directly, or with gulp or any number of other build tools. To see how we are building the CSS in this app, see [the webpack config](webpack.config.babel.js) and our [main.less](src/main.less)

# Vanilla JS

See [www/vanilla.html](www/vanilla.html)

In this example, we load the `widgets.js` from `otrl-search-widgets` via a `<script>` tag and imperatively render a search widget into our target DOM element.

_note_: The `widgets.js` is copied from `node_modules/` to `www/` in [the webpack config](webpack.config.babel.js)

# Advanced

Starting at [src/main.js](src/main.js) you will see a [React](https://reactjs.org) app using JSX & the latest JS features thanks to [Babel](https://babeljs.io).

Here we simply configure the widgets (as we did in the vanilla example), and then include the `<JourneyPlanner>` component in our JSX.

## Other npm scripts

### npm run build

Builds the app to `./www/`

### npm run build:dev

Builds the app to `./www/` in development mode (no minification)

### npm run view

Serve the demo site from `./www/`

### npm run publish

Publish `./www` to Github Pages (OTRL-only)

## License

To be confirmed
