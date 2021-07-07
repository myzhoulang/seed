/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path")
const CracoLessPlugin = require("craco-less")
const CracoAntDesign = require("craco-antd")

module.exports = {
  webpack: {
    alias: {
      "@": path.join(__dirname, "src")
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true
          }
        },
        modifyLessRule: function () {
          return {
            test: /\.module\.less$/,
            exclude: /node_modules/,
            use: [
              { loader: "style-loader" },
              {
                loader: "css-loader",
                options: {
                  modules: {
                    localIdentName: "[local]_[hash:base64:6]"
                  }
                }
              },
              { loader: "less-loader" }
            ]
          }
        }
      }
    },
    {
      plugin: CracoAntDesign,
      options: {
        customizeThemeLessPath: path.join(__dirname, "src/antd.customize.less")
      }
    }
  ]
}
