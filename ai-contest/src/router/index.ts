import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import EventInfo from '../pages/EventInfo.vue';
import RegistrationPage from '../pages/RegistrationPage.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/event-info', component: EventInfo },
    { path: '/register', component: RegistrationPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
