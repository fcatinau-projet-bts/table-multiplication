import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Tables from './components/LesTablesMultiplication.vue'

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/tables', name: 'tables', component: Tables  },
  ]
});