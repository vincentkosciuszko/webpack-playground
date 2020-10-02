# 📦 Webpack 5 Scss & Javascript playground

A very simple boilerplate I use when I want to quickly scaffold an environment to work with javascript and sass.

## Installation

```
git clone https://github.com/vnzko/webpack-playground ./my-idea
cd my-idea
yarn
```

## Usage

### Development server

This boilerplate use [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) to serv the generated files.

```
yarn start
```

You can access to the server at [`localhost:1111`](http://localhost:1111/)

### Development build

```
yarn dev
# or use the watcher
yarn watch
```

The files are available in the `wwwroot` folder.

### Production build

As the name suggests it's a **playground** and it isn't supposed to build thing that go in production. That is why there is no production build.

## Features

-   [Webpack](https://webpack.js.org/)
-   [Babel](https://babeljs.io/)
-   [Sass](https://sass-lang.com/)
-   [PostCSS](https://postcss.org/)

## Dependencies

### Webpack

-   [webpack](https://github.com/webpack/webpack)
-   [webpack-cli](https://github.com/webpack/webpack-cli)
-   [webpack-dev-server](https://github.com/webpack/webpack-dev-server)

### Babel

-   [@babel/core](https://www.npmjs.com/package/@babel/core)
-   [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)

### Loaders

-   [babel-loader](https://webpack.js.org/loaders/babel-loader/)
-   [css-loader](https://webpack.js.org/loaders/css-loader/)
-   [file-loader](https://webpack.js.org/loaders/file-loader/)
-   [postcss-loader](https://webpack.js.org/loaders/postcss-loader/)
-   [postcss-preset-env](https://github.com/csstools/postcss-preset-env)
-   [sass-loader](https://webpack.js.org/loaders/sass-loader/)

### Plugins

-   [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin)
-   [html-webpack-plugin](https://webpack.js.org/plugins/html-webpack-plugin/)
-   [mini-css-extract-plugin](https://webpack.js.org/plugins/mini-css-extract-plugin/)

### Others

-   [@carbon/colors](https://www.carbondesignsystem.com/guidelines/color/overview/)
-   [@csstools/normalize.css](https://github.com/csstools/normalize.css/)

## Author

-   [Vincent Kosciuszko](https://github.com/vnzko)

## License
This project is open source and available under the [WTFPL license](LICENSE)
