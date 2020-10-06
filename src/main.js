import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    { path: '/teams', component: TeamsList }, // our-domain.com/teams -> TeamsList
    { path: '/teams/:teamId', component: TeamMembers, props: true }, // our-domain.com/users -> UsersList
    { path: '/users', component: UsersList }, // our-domain.com/users -> UsersList,
    { path: '/:notFound(.*)', redirect: '/teams' }
  ]
});

const app = createApp(App);

app.use(router);

app.mount('#app');
