import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import Cookies from "js-cookie";
import * as echarts from 'echarts';
import './assets/css/common/public.css'
import 'amfe-flexible';
import './utils/rem'

Vue.use(ElementUI);
Vue.use(Cookies);

Vue.prototype.$echarts = echarts;
Vue.prototype.$cookies = Cookies;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
