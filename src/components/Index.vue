<template>
    <v-btn @click="onClick">
        <v-icon>touch_app</v-icon>
    </v-btn>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    methods: {
        onClick() {
            this.$router.push('hello')
        }
    }
})
</script>

<style lang="sass" scoped>
</style>
