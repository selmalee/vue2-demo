import Vue from 'vue';
import Router from 'vue-router';
import iView from 'iview';
import Hello from '@/components/hello';
import Posts from '@/components/posts.vue';
import Hotest from '@/components/posts/hotest';
import Latest from '@/components/posts/latest';
import About from '@/components/about';
import Notfound from '@/components/notfound';

Vue.use(Router);
Vue.use(iView);

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Hello',
        component: Hello
    },
    {
        path: '/posts',
        name: 'posts',
        component: Posts,
        children: [
            { path: 'hotest', component: Hotest },
            { path: 'latest', component: Latest }
        ]
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '*',
        component: Notfound
    }
  ]
})
