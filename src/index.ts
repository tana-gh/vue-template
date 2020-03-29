import Vue     from 'vue'
import Router  from 'vue-router'
import Vuetify from 'vuetify'
import App     from './components/App.vue'
import router  from './router'
import '../assets/scss/style.scss'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Router)
Vue.use(Vuetify)

new Vue({
    render: h => h(App),
    router,
    vuetify: new Vuetify()
})
.$mount('#app')
