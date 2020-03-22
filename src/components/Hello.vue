<template>
    <div>{{ hello }}</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data() {
        return {
            hello: 'Hello, world!'
        }
    }
})
</script>

<style lang="sass" scoped>
div
    font-weight: bold
</style>
