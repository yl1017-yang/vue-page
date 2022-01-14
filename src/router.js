import Vue from 'vue'; 
import VueRouter from 'vue-router';
import Home from "./views/Home";
import About from "./views/About"

Vue.use(VueRouter);

const route = [ 
    {path: "/", component: Home},
    {path: "/", component: About}
];

const router = new VueRouter({ 
    mode: 'history', 
    routes: route 
});

export default router;