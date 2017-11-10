import Vue from 'vue'
import VueRouter from 'vue-router'

// import VueQrcodeReader from 'vue-qrcode-reader'
// import * as VueGoogleMaps from 'vue2-google-maps'
import Layout from '@/Layout.vue'
import rotas from '@/rotas.vue'

import VueCordova from 'vue-cordova'
Vue.use(VueCordova, {
  optionTestKey: 'optionTestValue'
})

// add cordova.js only if serving the app through file://
if (window.location.protocol === 'file:' || window.location.port === '3000') {
  var cordovaScript = document.createElement('script')
  cordovaScript.setAttribute('type', 'text/javascript')
  cordovaScript.setAttribute('src', 'cordova.js')
  document.body.appendChild(cordovaScript)
}

Vue.use(VueRouter)
// Vue.use(VueQrcodeReader)
/* Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyD2hTdYcBChS46EwD0SpJnKGABMVZmCf5o',
    libraries: 'places,drawing,visualization' // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})
*/
/*
 * Uncomment this section and use "load()" if you want
 * to lazy load routes.
function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}
*/

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: rotas
        },
        {
          path: 'rotas',
          component: rotas
        }
      ]
    }
  ]
})
