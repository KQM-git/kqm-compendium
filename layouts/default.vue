<template>
    <div class="w-full min-h-screen py-0.5">
        <div class="max-w-screen-lg mx-auto h-full">
            <NavBar />
            <Nuxt />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'DefaultLayout',
    head () {
        return {
            bodyAttrs: {
                style: 'background-color: #19191d'
            }
        }
    }
})
</script>
