<template>
    <div>
        <div class="pt-3 flex justify-center">
            <input
                v-model="search"
                type="search"
                placeholder="Search"
                class="rounded-md p-1 pl-7 m-3 w-full max-w-sm bg-gray-600 bg-no-repeat bg-left"
                :style="{
                    'background-image': `url(${require('~/assets/icons/magnify.svg')})`
                }"
                @input="$fetch"
            >
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 justify-center gap-5 m-3">
            <CompositionPreview
                v-for="composition of compositions"
                :key="composition.slug"
                :composition="composition"
            />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'IndexPage',
    data () {
        return {
            search: '',
            compositions: []
        }
    },
    async fetch () {
        this.compositions = (await this.$content('comps', { deep: true }).where({ extension: '.md' })
            .sortBy('createdAt', 'asc')
            .where({
                $or: [
                    { title: { $regex: [this.search, 'i'] } },
                    { tags: { $regex: [this.search, 'i'] } }
                ]
            })
            .fetch())
            .filter((x: any) => x.slug === x.path.split('/').pop())
    }
})
</script>
