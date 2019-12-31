import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'

Vue.config.performance = true

Vue.use(VueRouter)
Vue.use(Vuetify)

import store from './store/store'
import { router } from './router/router'
import vuetify from './plugins/vuetify'

import App from './App.vue'

new Vue({
    vuetify,
    store,
    router,
    render: h => h(App)
}).$mount('#app')
