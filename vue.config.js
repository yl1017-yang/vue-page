// vue.config.js
module.exports = {
    outputDir:'./docs',
    publicPath:'/vue-page/',

    transpileDependencies: [
      'vuetify'
    ],

    css: { 
      loaderOptions: { 
        scss: { 
          prependData: ` @import "@/assets/scss/variables.scss"; `, 
        }, 
      }, 
    },

}
