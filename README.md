# Skeleton: React & Webpack & Typescript

### :one: Structure
```
|-src
  |-app
    |-components
      |-Hello.tsx
  |-index.tsx
  |-index.html
|-package.json
|-package-lock.json
|-server.js
|-tsconfig.json
|-webpack.config.js
```

### :two: Install the required development dependencies
```bash
npm init

# Dev dependecies
npm install --save-dev typescript
npm install --save-dev awesome-typescript-loader
npm install --save-dev source-map-loader
npm i -D webpack
npm i -D webpack-cli
npm i -D webpack-dev-middleware
npm i -D webpack-hot-middleware
npm i -D html-webpack-plugin

# Dependencies
npm install --save react
npm install --save react-dom
npm install --save @types/react
npm install --save @types/react-dom
npm i --save express
```
> **typescript** package instead of *babel-core* and *babel-preset-es2015* packages

> **awesome-typescript-loader** instead of *babel-loader*, **ts-loader** could be used too 
(see differences [here](https://github.com/s-panferov/awesome-typescript-loader#differences-between-ts-loader))

### :three: Add a TypeScript configuration file
- [x] tsconfig.json
```json
{
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "jsx": "react",
    "module": "commonjs",
    "noImplicitAny": true,
    "outDir": "./dist/",
    "preserveConstEnums": true,
    "removeComments": true,
    "sourceMap": true,
    "target": "es5"
  },
  "include": [
    "./src/**/*"
  ],
  "exclude": [
    "node_modules"
  ]
}
```
### :four: Add a Webpack configuration file
- [x] webpack.config.js
```javascript
const path = require('path'),
	webpack = require('webpack'),
	HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: ['./src/index.tsx', 'webpack-hot-middleware/client'],
		vendor: ['react', 'react-dom']
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].bundle.js'
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				loader: 'awesome-typescript-loader'
			},
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({template: path.resolve(__dirname, 'src', 'index.html')}),
		new webpack.HotModuleReplacementPlugin()
	]
};
```

### :five: Write some code
- [x] \src\index.html
- [x] \src\index.tsx
- [x] \src\app\components\Hello.tsx

### :six: Create server
To have the flexibility of a custom server for you to write middleware, 
handle routes and modify requests and responses.

- [x] server.js

### :seven: Add build and start scripts in package.json
```
...
scripts: {
    ...
    "build": "./node_modules/.bin/webpack",
    "start": "npm run build && node server.js",
    ...
}
...
```

### :eight: Fix hot reload
- [x] \src\index.tsx
```typescript jsx
import * as ReactDOM from 'react-dom';

declare let module: any

ReactDOM.render({...},
document.getElementById('root'));

if (module.hot) {
   module.hot.accept();
}
```
