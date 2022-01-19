import 'vuetify/dist/vuetify.min.css' 
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'md' // 'md' || 'mdi' || 'fa' || 'fa4'
    },
});
