<template>
    <div class="">
        <h4>Add An Event <input type="checkbox" v-model="showForm"></h4>
        <div class="form" v-if="showForm">
            <div class="form-group">
                <label>Title</label>
                <input type="text" class="form-control" v-model="event.title"/>
            </div>
            <div class="form-group">
                <label>Description</label>
                <input type="text" class="form-control" v-model="event.description"/>
            </div>
            <div class="form-group">
                <label>Date</label>
                <input type="date" class="form-control" v-model="event.date"/>
            </div>
            <div class="form-group">
                <label>Location</label>
                <input type="text" class="form-control" v-model="event.location"/>
            </div>
            <button class="btn btn-primary btn-small" @click="addEvent">Submit</button>
        </div>

    </div>
</template>
<script>
import {db} from '../firebaseApp'
import {set, ref, push} from 'firebase/database'

console.log("here1");

    export default {
        data() {
            return {
                event: {
                    title: '',
                    description:'',
                    date:'',
                    location:'',
                    email: ''
                }
                , showForm: false
            }
        },
        methods: {
            addEvent() {
                console.log("here1")
                this.event.email = this.$store.state.user.email;
                
                push(ref(db,'event'),this.event)
                .then(
                    console.log('good2')
                    )
                .catch(err => {
                    console.log('err2:'+err)
                });
                console.log("here35")
            }

        }
    }
</script>

