<template>
    <div class="form-inline">
        <h3>Sign In</h3>
        <input type="text" 
            name="password"
            placeholder="email"
            class = "form-control"
            v-model="email"/>
        <input 
            type="password" 
            name="password"
            placeholder="password"
            class="form-control"
            v-model="password"/>
        <button class="btn btn-primary" @click="signIn">Sign In</button>
        <br/>
        <router-link to="/signup">Not a user yet? Sign up</router-link>
        <br/>
        <p>{{error.message}}</p>
        
    </div>
</template>
<script>
import {firebaseApp} from '../firebaseApp'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
const auth = getAuth(firebaseApp);

export default {
    data() {
        return {
            email:'',
            password:'',
            error: {
                message:''
            }
        }
    }, 
    methods: {
        signIn() {
            signInWithEmailAndPassword(auth , this.email, this.password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error)=>{
                this.error = error;
                const errorCode = error.code;
                const errorMessage = error.errorMessage;
            })
        }
    }
}

</script>
