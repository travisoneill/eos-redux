const top = (type) => {
return `const path = require('path');
module.exports = {
  context: __dirname,
  entry: './frontend/index.jsx',
  output: {`
};

const path = (framework) => {
  if(framework === 'rails'){
    return `path: path.join(__dirname, 'public', 'javascripts'),`
  }
};

const bottom = (type) => {
  return`filename: 'bundle.js'
},
resolve: {
  extensions: ['', '.js', '.jsx']
},
module: {
  loaders: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    },
    {
      test: /\.node$/,
      loader: 'node-loader'
    },
    {
      test: [/\.css?$/],
      loader: 'style-loader!css-loader'
    }
  ]
},
devtool: 'source-maps'
};`
};

const Make = (type, framework) => {
  return top(type) + path(framework) + bottom(type);
}


module.exports = Make
