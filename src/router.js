import Vue from 'vue'; 
import VueRouter from 'vue-router';
import Home from "./views/Home";
import About from "./views/About";

Vue.use(VueRouter);

const route = [ 
    {
        path: "/vue-page/",
        name: "Home",
        component: Home,
    },
    {
        path: "/vue-page/views/about", 
        name: "About",
        component: About
    }
];

const router = new VueRouter({ 
    mode: 'history', 
    routes: route 
});

export default router;