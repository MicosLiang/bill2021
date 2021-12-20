import App from './App'
import Vue from 'vue'
import  VueTypedJs  from '@/common/vue-typed-js'
import AOS from 'common/aos/aos.js'
 
 
Vue.use(VueTypedJs)
// Vue.use(AOS.init())
AOS.init();


Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()

