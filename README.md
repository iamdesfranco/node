# Node.js Tutorials

## Folders

### 1. webpack_tut
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

Open index.js
```javascript
const $ = require("jquery");
$("#target").html("hello world"); 
```

Back to terminal
```bash
cd ../dist
touch index.html
```
Add all the content to the index.html file like the "#target" div

Back to terminal
```bash
cd ../
npx webpack
```

