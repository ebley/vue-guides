<template>
    <div class="">
        Dashboard
        <div class="upper-right">
            <button class="btn btn-success btn-sm signout-btn" @click="signUp">SignUp</button>
            <button class="btn btn-danger btn-sm " @click="signOut">Logout</button>
        </div>
        <hr/>
        <AddEvent />
        <br/>
        <div class="col-md-12">
        <EventItem v-for="(event_item,idx) in this.$store.state.events" 
            :key="idx"
            :event="event_item"
            />
        </div>
        {{$store.state.events}}
    </div>
</template>
<script>
import {firebaseApp, db, reff, auth} from '../firebaseApp'
import {onValue, query, get, ref} from 'firebase/database'
import {getAuth, signOut} from 'firebase/auth' 
import AddEvent from './AddEvent.vue'
import EventItem from './EventItem.vue'

export default {
    methods: {
        signOut() {
            this.$store.dispatch('signOut')

            signOut(getAuth())
                .catch((error) => {
                    this.error = error;
                });
        },
        signUp() {
            console.log('sign up not finished')
        },
    }, 
    components: {
        AddEvent, 
        EventItem,
    },
    mounted() {
        onValue(ref(db,'event'), snap => {
            let events = []
            snap.forEach(event => {
                events.push(event.val()); //note val() - not val
                console.log('item')
            });
            this.$store.dispatch('setEvents', events)
        })
    }
}
</script>
