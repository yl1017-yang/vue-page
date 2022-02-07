// vue.config.js
module.exports = {
    outputDir:'./docs',
    publicPath:'/vue-page/',

    transpileDependencies: [
      'vuetify'
    ],

    css: { 
      loaderOptions: { 
        sass: { 
          prependData: ` @import "@/assets/scss/variables.scss"; `, 
          //data: `@import "@/assets/scss/variables/index.scss";`
        }, 
      }, 
    },


}
