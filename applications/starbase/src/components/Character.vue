<template>
    
    <div class="col-md-4" @click="switchCharacter">

        <div class="character-card">
            <div class="card-block">
                <h4 class="card-title">{{character.name}}</h4>
                <p class="card-text">Height: {{character.height}}</p>
                <p class="card-text">Height: {{character.mass}}</p>
                <p class="card-text">Hair Color: {{character.hair_color}}</p>
                <p class="card-text">Hair Color: {{character.eye_color}}</p>
            </div>
        </div>

    </div>
</template>
<script>


export default ({
    props: ['idp'],
    data() {
        return {
            character: { 
                item:"this"
            }
        }
    },
    methods: {
        fetchCharacter(id) {
            fetch(`http://swapi.dev/api/people/${id}`, 
            {
                method: 'GET'
            })
            .then(response => response.json()) //ES6 shortform avoiding "return" on something so simple
            .then(json => {
                this.character = json
            })
        },
        switchCharacter() {
            let random_id = Math.floor(Math.random() * 83) +1;
            this.fetchCharacter(random_id);
        }
    },
    created() {
        this.switchCharacter(this.idp)
    }
})
</script>
