import Vue from 'vue';
import App from './App.vue';
import store from './store';

import HelloWorld from '@/components/HelloWorld.vue';
import Button from '@/components/Button.vue';

Vue.config.productionTip = false;

Vue.component('HelloWorld', HelloWorld);
Vue.component('AppButton', Button);


new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
