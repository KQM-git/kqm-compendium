<template>
    <div>
        <page-banner name="Rotation Bank" image-name="rotation_bank.png" />
        <main-view :name="['rotations', 'comps']" path="rotation-bank" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PageBanner from '~/components/PageBanner.vue'
import MainView from '~/components/MainView.vue'

export default Vue.extend({
    name: 'IndexPage',
    components: { MainView, PageBanner }
})
</script>
