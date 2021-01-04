<template>
    <v-app>
        <v-app-bar app color="primary" dark>
            <v-toolbar-title>Vue Page</v-toolbar-title>
        </v-app-bar>
        <v-main>
            <v-container fluid>
                <router-view/>
            </v-container>
        </v-main>
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>>

<style lang="scss" scoped>
</style>
