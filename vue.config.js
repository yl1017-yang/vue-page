// vue.config.js
module.exports = {
    outputDir:'./docs',
    publicPath:'/vue-page/',
    runtimeCompiler: true, //louter 작동하지 않을시

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
