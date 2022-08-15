<template>
    <main-view :name="'rotations'" :path="'rotation-bank'" />
</template>

<script lang="ts">
import Vue from 'vue'
import MainView from '~/components/MainView.vue'

export default Vue.extend({
    name: 'IndexPage',
    components: { MainView }
})
</script>
