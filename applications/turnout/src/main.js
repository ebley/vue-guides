import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import {firebaseApp} from './firebaseApp.js'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

Vue.use(VueRouter)
import store from './store'

//import firebase from 'firebase'
import App from './components/App.vue'
import Signin from './components/Signin.vue'
import Signup from './components/Signup.vue'
import Dashboard from './components/Dashboard.vue'
const router = new VueRouter({
    mode:'history', //hashmode or history mode (gets rid of this hash to acheive the # effect)
    routes: [
        {path: '/dashboard', component: Dashboard},
        {path: '/signin', component: Signin},
        {path: '/signup', component: Signup}
    ]
})

const auth = getAuth();

onAuthStateChanged( auth, (user) => {
    //check listener
    // if listener is triggered we affect our routes
    if (user) {
        store.dispatch('signIn', user)
        router.push('/dashboard').catch(err => {})

    } else {
        router.replace('/signin').catch(err => {}) //new stack TODO replace by uncommenting
    }
})
new Vue({
    el:'#app',
    router,
    store,
    render: h => h(App)  //h can be anything but they normally use h
})