<template>
    <div>
        <div class="pt-3 flex">
            <form action onsubmit="return false" class="w-full m-3 flex justify-center">
                <input
                    v-model="search"
                    type="search"
                    placeholder="Search"
                    class="rounded-md p-1 pl-9 w-full max-w-sm bg-gray-600 bg-no-repeat bg-left text-white"
                    :style="{
                        'background-image': `url(${require('~/assets/icons/magnify.svg')})`,
                        'background-position': '0.5em 50%'
                    }"
                    @keyup.enter="submit()"
                    @keyup.delete="removeLastTerm()"
                >
            </form>
        </div>
        <div class="flex felx-row flex-wrap justify-center items-center">
            <div
                v-for="(searchTerm, i) in searchTerms"
                :key="i"
                class="flex flex-row justify-center items-center rounded-md p-1 m-1 bg-purple-700 text-white"
            >
                {{ searchTerm }}
                <button @click="removeTerm(i)">
                    <img src="~/assets/icons/close-circle.svg" class="h-5 pl-1">
                </button>
            </div>
        </div>
        <div :class="'grid grid-cols-1 justify-center gap-5 m-3 ' + (searchTerms.length == 0 ? 'sm:grid-cols-2' : '')">
            <CompositionPreview
                v-for="composition of compositions"
                :key="composition.slug"
                :composition="composition"
                :detailed-view="searchTerms.length == 0"
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
            searchTerms: [] as string[],
            compositions: []
        }
    },
    async fetch () {
        this.compositions = (await this.$content('comps', { deep: true }).where({ extension: '.md' })
            .sortBy('createdAt', 'asc')
            .fetch())
            .filter((x: any) => x.slug.includes('1_'))
            .filter((x: any) => this.searchTerms.every((term: string) => x.tags.join('').match(RegExp(term, 'i'))))
    },
    methods: {
        submit () {
            if (this.search !== '' && !this.searchTerms.includes(this.search)) {
                this.searchTerms.push(...this.search.split(',').map((x: string) => x.trim()))
                this.search = ''
            }
            this.$fetch()
        },
        removeTerm (i: number) {
            this.searchTerms.splice(i, 1)
            this.$fetch()
        },
        removeLastTerm () {
            this.searchTerms.pop()
            this.$fetch()
        }
    }
})
</script>
