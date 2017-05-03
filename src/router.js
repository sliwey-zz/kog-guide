import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app';
import Hero from './pages/hero';
import Item from './pages/item';
import Inscription from './pages/inscription';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/', component: App,
      children: [
        // { path: 'home', component: Home, alias: '' },
        { path: 'heroes', component: Hero, alias: '' },
        { path: 'items', component: Item },
        { path: 'inscriptions', component: Inscription }
      ]
    }
  ]
})