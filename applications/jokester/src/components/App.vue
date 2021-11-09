<template>
    <div id="app">
        <h3>Got Jokes?</h3>
            <button class="btn btn-primary" @click="initJokes">Add 10 Random Jokes</button>
            <button class="btn btn-primary" @click="addJoke">Add 1 more</button>
            <button class="btn btn-primary" @click="clearJokes">Clear List</button>
    
        <br/>
        <span v-for="jokeType in jokeTypes">
            <input 
                type="checkbox" 
                checked 
                :value="jokeType" 
                v-model="checkedTypes" 
                />
            <label>{{jokeType}}</label>&nbsp;
        </span>
        <br/>
        <div class="col-md-12">
            <Joke
            v-for="(joke, index) in $store.state.jokes"
            v-show="checkedTypes.includes(joke.type)"
            :joke = "joke"
            :idx = "index"
            :key="index"

            /> 
        </div>  
        <div>{{$store.state}}</div>
    </div>    
</template>
<script>

import {mapActions} from 'vuex' //we just need to accept this mapActions
                                // its an object that we set to the methods
                                // that we will now have available to us
                                // to use as our own action
import Joke from './Joke.vue'

export default {
    data() {
        return {
            item:"hey hey",
            jokeTypes: ['programming','general','knock-knock'],
            checkedTypes: ['programming','general','knock-knock']
        }
    },
    methods: mapActions([
            'initJokes','addJoke' //actions we would like to map 
                                  //  - we want initJokes
                                  // OUR ACTIONS the ones WE wrote in 
                                  //actions.js
            ,'clearJokes', 'removeJoke'
    ]),
    components: {
        Joke
    }
    
}

</script>
