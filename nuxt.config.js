const pkg = require('./package')
const path = require('path')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  router: {
    middleware: 'permission'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#409eff', failedColor: '#f56c6c' },

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'nprogress/nprogress.css',
    { src: '~assets/styles/index.scss', lang: 'scss' }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/plugins/element-ui', '~/plugins/svg-icon', '~/plugins/i18n'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/router'
    // https://www.andiamo.co.uk/resources/iso-language-codes
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    // baseURL: 'https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      // const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
      // svgRule.test = /\.(png|jpe?g|gif|webp)$/
      // config.module.rules.push({
      //   test: /\.svg$/,
      //   options: {
      //     svgo: {
      //       plugins: [
      //         {
      //           prefixIds: {
      //             prefix: (node, { path }) => basename(path, '.svg'),
      //             delim: '-'
      //           }
      //         }
      //       ]
      //     }
      //   }
      // })
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
      svgRule.exclude = [path.resolve(__dirname, 'assets/svg')]

      // Includes /assets/svg for svg-sprite-loader
      config.module.rules.push({
        test: /\.svg$/,
        include: [path.resolve(__dirname, 'assets/svg')],
        loader: 'svg-sprite-loader',
        options: {
          symbolId: 'icon-[name]'
        }
      })
    }
  }
}
