module.exports = {
    context: __dirname,
    entry: {
      main: './src/index.tsx'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          type: 'css'
        },
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
      minify: false,
      html: [{
        template: './index.html'
      }],
      react: {
        importSource: 'solid-js'
      }
    }
  }