/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
    context: __dirname,
    entry: {
      main: './src/index.tsx'
    },
    module: {
      rules: [
        {
          test: /\.module.css$/,
          type: 'css/module'
        },
        {
          test: /\.[t|j]sx$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-typescript',
                  "solid"
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