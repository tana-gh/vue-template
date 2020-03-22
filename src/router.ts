import Router from 'vue-router'
import Index  from './components/Index.vue'
import Hello  from './components/Hello.vue'

export default new Router({
    mode: 'hash',
    routes: [
        { name: 'index', path: '/'     , component: Index },
        { name: 'hello', path: '/hello', component: Hello }
    ]
})
