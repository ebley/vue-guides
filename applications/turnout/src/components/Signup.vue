<template>
    <div class="form-inline">
        <h3>Sign Up</h3>
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
        <button class="btn btn-primary" @click="signUp">Sign Up</button>
        <br/>
         <router-link to="/signin">Already a User? Sign In</router-link>
         <br/>
         <p>{{error.message}}</p>
    </div>
</template>
<script>
import {firebaseApp} from '../firebaseApp'
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
const auth = getAuth();

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
        signUp() {
            createUserWithEmailAndPassword(auth , this.email, this.password)
            .then((message) => {
                this.error = {
                    message:"Successfully created user'+ this.email +'. You are now logged in!"
                }
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
