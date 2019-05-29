# Readme

## Webpack
This folder consists of the basic template for a application using webpack

**Steps**

```bash
npm install webpack --save-dev
npm install webpack-cli --save-dev
npm install jquery --save
mkdir src dist
cd src
touch index.js
```

### Open index.js
```javascript
const $ = require("jquery");
$("#target").html("hello world"); 
```

### Back to terminal
```bash
cd ../dist
touch index.html
```
### Add all the content to the index.html file like the "#target" div

### Back to terminal
```bash
cd ../
npx webpack
```

### Setting Up webpack.config.js

### Get into main folder - Terminal
```bash
touch webpack.config.js
```

### Open webpack.config.js
```javascript
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },

}
```

### Setting up the build script
```javascript
//Within the package.json file find and change the following

{
    "scripts": {
    "build": "webpack -w"
    },
}
```

### Next we will set up Babel Loader 
```bash
npm install babel-loader @babel/core --save-dev
npm install @babel/preset-env --save-dev
```

### Next in the webpack.config.js file add the following
```javascript
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
            }
        ]
    },
}
```

### Run Build
```bash
npm run build
```

### Install React and React Dom and set up project to run with React

```javascript
// index.js
import React from 'react'
import { render } from 'react-dom'

const Greeting = () => "Hello"

render (
    <Greeting/>,
    document.getElementById('target')
)
```
### Install React
```bash
npm install react react-dom --save
```
### Edit webpack.config
```javascript
options: {
    presets: ['@babel/preset-env', '@babel/preset-react']
}
```

### Create a file .bablerc in main dir
```bash
cd ../
touch .babelrc
```

### Open .babelrc
```javascript
{
    "presets": ["@babel/preset-react", "@babel/preset-env"]
}
```

### Run npm build
```bash
npm run build
```




