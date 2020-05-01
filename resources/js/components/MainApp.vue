<template>
<div>
    <app-header></app-header>
    <router-view></router-view>
</div>
    
</template>

<script>
import Header from './Header';

    export default {
        components: {
            'app-header': Header
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
