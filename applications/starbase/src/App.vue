<template>
<div id="app">
    <h3>{{title}}</h3>
    <Character 
        v-for="(id, index) in initial_ids"
        v-bind:idp="id"
        key="index"/>
    
</div>
</template>

<script>
import Character from './components/Character.vue'

export default { //becomes our Vue instance
    name: 'app', //name that maps
    data () { //can't use an object but you need a function
        return {
            title:'Generate Your Team',
            initial_ids: [1,13,14],
        }
    },
    methods: {
        
    },
    components: {
        Character //ES6 shortform
    }
}
</script>
