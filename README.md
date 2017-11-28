# otrl-search-widgets-demo

## Quick start

Installs dependencies and starts up a development server running the demo app:

```npm install && npm start```

## Guide

This demo shows 2 examples of how you can embed otrl-search-widgets in your site.

# Vanilla JS

See [www/vanilla.html](www/vanilla.html)

In this example, we load the `widgets.js` from `otrl-search-widgets` via a `<script>` tag and imperatively render a search widget into our target DOM element.

_note_: The `widgets.js` is copied from `node_modules/` to `www/` in [the webpack config](webpack.config.babel.js)

The CSS is built by webpack, but running `npm run build:css` will compile the css with [less](https://www.npmjs.com/package/less).

# Advanced

Starting at [src/main.js](src/main.js) you will see a [React](https://reactjs.org) app using JSX & the latest JS features thanks to [Babel](https://babeljs.io).

Here we simply configure the widgets (as we did in the vanilla example), and then include the `<JourneyPlanner>` component in our JSX.

Also, please note in [the webpack config](webpack.config.babel.js) we load [babel-polyfill](https://babeljs.io/docs/usage/polyfill/) before our entry point so that modern JavaScript features are available on older browsers such as Internet Explorer.

## Other npm scripts

### npm run build

Builds the app to `./www/`

### npm run build:dev

Builds the app to `./www/` in development mode (no minification)

### npm run build:css

Standalone script to build the css using [less](https://www.npmjs.com/package/less) & [less-plugin-npm-import](https://www.npmjs.com/package/less-plugin-npm-import)

### npm run view

Serve the demo site from `./www/`

### npm run publish

Publish `./www` to Github Pages (OTRL-only)

## License

To be confirmed
