// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Dlsugar from 'main/index.js'
import routes from './routes'
import hljs from 'highlight.js'
import demoBlock from './components/demo-block'

import 'packages/theme-chalk/src/index.scss'
import './demo-styles/index.scss'
import './assets/styles/common.css'
import './assets/styles/fonts/style.css'
import icon from './icon.json'

window.ga = function () {
  console.log(arguments)
}
Vue.use(Dlsugar)
Vue.use(VueRouter)
Vue.component('demo-block', demoBlock)

Vue.prototype.$icon = icon // Icon 列表页用

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
})

Vue.config.productionTip = false
router.afterEach(route => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
  // const data = title[route.meta.lang]
  // for (let val in data) {
  //   if (new RegExp('^' + val, 'g').test(route.name)) {
  //     document.title = data[val]
  //     return;
  //   }
  // }
  document.title = 'Dlsugar'
  ga('send', 'event', 'PageView', route, route.name)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
