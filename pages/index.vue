<template>
    <main-view :name="['comps']" />
</template>

<script lang="ts">
import Vue from 'vue'
import MainView from '~/components/MainView.vue'

export default Vue.extend({
    name: 'IndexPage',
    components: { MainView }
})
</script>
