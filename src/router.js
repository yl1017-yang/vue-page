import Vue from 'vue'; 
import VueRouter from 'vue-router';
import Home from "./views/Home";
import About from "./views/About";
//import BoardList from '@/components/BoardList' 
// import BoardView from '@/components/BoardView' 
// import BoardWriter from '@/components/BoardWriter'


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
    },
    // { 
    //     path: '/vue-page/views/list', 
    //     name: 'BoardList', 
    //     component: BoardList 
    // }, 
    // { 
    //     path: '/vue-page/views/view/:seq', 
    //     name: 'BoardView', 
    //     component: BoardView 
    // }, 
    // { 
    //     path: '/vue-page/views/writer', 
    //     name: 'BoardWriter', 
    //     component: BoardWriter
    // }
];

const router = new VueRouter({ 
    mode: 'history', 
    routes: route,
});

export default router;