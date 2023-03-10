/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
    context: __dirname,
    entry: {
      main: './src/index.jsx'
    },
    module: {
      rules: [
        {
          test: /\.module.css$/,
          type: 'css/module'
        },
        {
          test: /\.jsx$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  ["solid"]
                ],
                plugins: [
                  "solid-refresh/babel"
                ]
              }
            }
          ]
        }
      ]
    },
    builtins: {
      html: [{
        template: './index.html'
      }],
    }
  }