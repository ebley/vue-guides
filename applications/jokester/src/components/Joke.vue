<template>
    <div class='col-md-6'>
        <div class="joke-card">
            <div class = "card-block">
                 <button class="close" @click="removeJoke(idx)">
                     <span>&times;</span>
                </button>

                <p><u>{{joke.setup}}</u></p>
                <p><em>{{joke.punchline}}</em></p>
            </div>
        </div>
    </div>
</template>
<script>

import {mapActions} from 'vuex'



export default {
    props: ['joke','idx'], //if we dont put stuff here it wont be 
                                // to us passed here for use
    methods: mapActions([
        'removeJoke' // i just want one method avail
    ])
    
}

</script>
