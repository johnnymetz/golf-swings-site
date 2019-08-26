export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Golf Swings',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'shortcut icon', href: '/favicon/favicon.ico' },
      { rel: 'icon', sizes: '16x16 32x32 64x64', href: '/favicon/favicon.ico' },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192',
        href: '/favicon/favicon-192.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '160x160',
        href: '/favicon/favicon-160.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/favicon/favicon-96.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '64x64',
        href: '/favicon/favicon-64.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon/favicon-32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon/favicon-16.png'
      },
      { rel: 'apple-touch-icon', href: '/favicon/favicon-57.png' },
      {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: '/favicon/favicon-114.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: '/favicon/favicon-72.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '/favicon/favicon-144.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: '/favicon/favicon-60.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/favicon/favicon-120.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: '/favicon/favicon-76.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: '/favicon/favicon-152.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicon/favicon-180.png'
      },
      {
        rel: 'stylesheet',
        href:
          'https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/yeti/bootstrap.min.css'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Montserrat|Work+Sans&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/global.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/vue-silentbox.js', ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          // {
          //   set: '@fortawesome/free-regular-svg-icons',
          //   icons: ['far']
          // },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ],
    'nuxt-svg-loader',
    '@nuxtjs/apollo'
  ],
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false // Or `bvCSS: false`
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint:
          process.env.apollo_endpoint || 'http://localhost:8000/graphql/'
      }
    }
  },
  env: {
    authUser: process.env.AUTH_USER,
    authPassword: process.env.AUTH_PASSWORD
  },
  // server: {
  //   host: '0.0.0.0' // default: localhost
  // },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
