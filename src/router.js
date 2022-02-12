import Vue from 'vue'; 
import VueRouter from 'vue-router';
import Home from "./views/Home";
import About from "./views/About";
//import boardList from '@/components/boardList'
import boardList from './views/boardList' 
import boardView from './views/boardView' 
import boardWriter from './views/boardWriter'


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
    { 
        path: '/vue-page/views/list', 
        name: 'boardList', 
        component: boardList 
    }, 
    { 
        path: '/vue-page/views/view/:seq', 
        name: 'boardView', 
        component: boardView 
    }, 
    { 
        path: '/vue-page/views/writer', 
        name: 'boardWriter', 
        component: boardWriter
    }
];

const router = new VueRouter({ 
    mode: 'history', 
    routes: route,
});

export default router;