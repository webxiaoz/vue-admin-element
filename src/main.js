import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

/*** @Description: import router*/
import router from './router/index'

/*** @Description: import element-ui*/
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

/*** @Description: import vue-fragment*/
import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
