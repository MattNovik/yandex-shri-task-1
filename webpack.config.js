const path = require('path');

module.exports = {
  entry: './pages/index/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'pages/index'),
  },
};

// module.exports = {
//   entry: './build/template-engine.js',
//   output: {
//     filename: 'template-engine.js',
//     path: path.resolve(__dirname, 'dist'),
//     library: 'window'
//   }
// }