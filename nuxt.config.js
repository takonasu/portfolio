export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: "Takonasu's Portfolio",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'たこなすのポートフォリオ'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: "Takonasu's Portfolio"
      },
      { hid: 'og:type', property: 'og:type', content: 'summary' },
      { hid: 'og:url', property: 'og:url', content: 'https://takonasu.net' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: "Takonasu's Portfolio"
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://takonasu.net/takonasu_icon.jpg'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'たこなすのポートフォリオ'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `https://takonasu.net/takonasu_icon.jpg`
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary'
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@ITF_tako' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/takonasu_icon.jpg' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '@fortawesome/fontawesome-free-webfonts',
    '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/vue-scrollto.js',
    { src: '~plugins/ga.js', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy'
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {}
  }
}
