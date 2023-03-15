export default {
  target: 'server', // SSR (default)
  // target: 'static', // SSG

  // Global page headers: https://go.nuxtjs.dev/config-head
  /* SEO */
  head: {
    title: 'Tiago_Matos_Nuxt2',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'Minha descrição',
        name: 'Minha descrição',
        content: 'Minha descrição'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ],
    script: [
      // { src: 'cdn/script.js' } // teste
    ]
  },

  /* ENV */
  publicRuntimeConfig: {
    youtube_api_key: process.env.YOUTUBE_API_KEY
  },
  privateRuntimeConfig: {
    facebook_api_key: process.env.FACEBOOK_API_KEY
  },

  /* middleware router */
  // router: {
  //   middleware: ['auth']
  // },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // {
    //   src: '@/plugins/myPlugins',
    //   mode: 'client' // apenas client-side
    // },
    '@/plugins/myPlugins',
    '@/plugins/dayjs',
    '@/plugins/vtooltip',
    '@/plugins/axios'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_URL
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
