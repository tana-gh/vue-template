import Vue     from 'vue'
import Router  from 'vue-router'
import Vuetify from 'vuetify'
import App     from './components/App.vue'
import router  from './router'
import '../assets/sass/style.sass'
import 'vuetify/dist/vuetify.min.css'
import 'material-icons/iconfont/material-icons.css'

Vue.use(Router)
Vue.use(Vuetify)

const app = new Vue({
    render: h => h(App),
    router,
    vuetify: new Vuetify()
})
.$mount('#app')
