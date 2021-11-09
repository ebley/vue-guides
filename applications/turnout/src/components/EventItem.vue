<template>
    <div class="col-md-4">
        <div class="event-card">   
            <h4 class = "card-title">{{event.title}}</h4>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Date: {{event.date}}</li>
                <li class="list-group-item">Location: {{event.location}}</li>
                <li class="list-group-item">Description{{event.description}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props: ['event'], 
    data() {
        return {
            temp: 0
        }
    }, 
    methods: {

    },
    components: {

    }
}
</script>
