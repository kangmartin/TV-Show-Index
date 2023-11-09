import { createRouter, createWebHistory } from 'vue-router';
import AllShows from './components/AllShows.vue';
import SingleShow from './components/SingleShow.vue';

const routes = [
    {
        path: '/',
        name: 'all-shows',
        component: AllShows
    },
    {
        path: '/show/:id',
        name: 'single-show',
        component: SingleShow
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
