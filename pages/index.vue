<template>
    <div>
        <page-banner name="Rotation Bank" image-name="main.jpg" />
        <main-view :name="['comps']" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PageBanner from '~/components/PageBanner.vue'
import MainView from '~/components/MainView.vue'

export default Vue.extend({
    name: 'IndexPage',
    components: { PageBanner, MainView }
})
</script>
