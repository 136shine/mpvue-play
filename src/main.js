import Vue from 'vue'
import App from './App'
// import 'mpvue-weui/src/style/weui.css'
import fetch from '@/utils/fetch.js'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.$fetch = fetch

const app = new Vue(App)
app.$mount()
