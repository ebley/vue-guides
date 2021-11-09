import Vue from 'vue'
//import VueRouter from 'vue-router'
//Vue.use(VueRouter)
import App from './components/App.vue'
import store from './store/index.js'

// const routes = [
//     { path: '/data/:type', component: Data }
// ]

// const router = new VueRouter({
//     routes
// })

//store.commit('INIT_JOKES',[{test: 'test-joke'},{test2: 'test2-joke'}])
new Vue( //include things to use
    {
        el: '#app',
        store,
        render: h => h(App)
    }
)