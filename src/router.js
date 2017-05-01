import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app';
import Home from './pages/home/home';
import Hero from './pages/hero/hero';
import Item from './pages/item/item';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/', component: App,
      children: [
        { path: 'home', component: Home, alias: '' },
        { path: 'heroes', component: Hero },
        { path: 'items', component: Item }
      ]
    }
  ]
})