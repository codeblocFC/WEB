import Vue from 'vue';
import Router from 'vue-router';
import Landing from '@/components/Landing';
import Home from '@/views/Home';
import UserDetail from '@/views/UserDetail';
import Error from '@/views/Error404';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'landing',
            component: Landing
        },
        {
            path:'/home',
            name:'home',
            component: Home
        },
        {
            path:'/user/:id',
            name: 'user-detail',
            component: UserDetail
        },
        {
            path:'*',
            name: 'error',
            component: Error
        }
    ]
});