module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Clinton Jones - Portfolio',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'nuxt portfolio project'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
    css: [
      '~assets/css/main.css'
    ],
  },


  /*
   ** Customize the progress bar color
   */
  loading: false,
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
    modules: [
      'bootstrap-vue/nuxt',

      // Or if you have custom bootstrap CSS...
    //   ['bootstrap-vue/nuxt',
    //   // {
    //   //   css: false
    //   // }
    // ],
    ]
}
