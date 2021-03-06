
const TerserPlugin = require('terser-webpack-plugin')

const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)

module.exports = {
  productionSourceMap: false,
  lintOnSave: false,

  configureWebpack: config => {
    if (IS_PROD) {
      const plugins = []
      plugins.push(
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
              drop_debugger: false,
              pure_funcs: ['console.log']
            }
          },
          extractComments: /@extract/i,
          sourceMap: false,
          parallel: true
        })
      )

      config.plugins = [
        ...config.plugins,
        ...plugins
      ]
    }
  },

  chainWebpack: config => {
    if (IS_PROD) {
      config.optimization.minimize(true)
      config.optimization.splitChunks({ chunks: 'all' })
    }

    // 修复HMR
    config.resolve.symlinks(true)

    // 修复Lazy loading routes Error： Cyclic dependency  [https://github.com/vuejs/vue-cli/issues/1669]
    config.plugin('html').tap(args => {
      args[0].chunksSortMode = 'none'

      if (IS_PROD) {
        args[0].cdn = cdn
      }
      return args
    })

    // 添加别名
    config.resolve.alias
      .set('@', resolve('src'))
  },

  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        // snapsvg: 'snapsvg/dist/snap.svg.js',
      }
    }
  },

  css: {
    // extract: false,
    loaderOptions: {
      sass: {
        prependData: '@import "@/styles/variables.scss";'
      }
    }
  },

  devServer: {
    open: true,
    port: 8000,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080',
      }
    }
  }
}
