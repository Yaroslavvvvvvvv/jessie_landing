import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)




import 'bootstrap/dist/css/bootstrap.css'
import ('../src/assets/styles/bootstrap.css')
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ('../src/assets/styles/VStyles.scss')
import('../src/assets/fonts/Josefin_Sans/static/JosefinSans-Bold.ttf')


Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
