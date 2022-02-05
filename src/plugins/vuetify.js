import 'vuetify/dist/vuetify.min.css';
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

//import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'; // 아이콘 불러오기
import '@/assets/scss/_index.scss'; // _index.scss를 한번만 불러오면 자동으로 css로 컴파일 해줌

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
    },
});
