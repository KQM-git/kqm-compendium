<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 justify-center gap-5 m-3">
        <CompositionPreview
            v-for="composition of compositions"
            :key="composition.slug"
            :composition="composition"
        />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'IndexPage',
    async asyncData ({ $content }) {
        const compositions = (await $content('comps', { deep: true }).where({ extension: '.md' }).sortBy('createdAt', 'asc').fetch()).filter((x: any) => x.slug === x.dir.replace('/comps/', ''))

        return { compositions }
    }
})
</script>
