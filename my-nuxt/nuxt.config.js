import axios from 'axios'
module.exports = {
  // generate: {
  //   routes: function() {
  //     return axios.get('https://api.myjson.com/bins/lecht')
  //       .then(res => {
  //         console.log('routes res', res)
  //         return res.news.map(news => {
  //           return {
  //             route: '/news/' + news.id,
  //             payload: news
  //           }
  //         })
  //       })
  //   }
  // },
  css: [
    '@/assets/css/normailze.css',
    '@/assets/css/main.css'
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'my-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

