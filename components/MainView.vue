<template>
    <div>
        <div class="py-3 flex">
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
                class="flex flex-row justify-center items-center rounded-md p-1 m-1 bg-kqm-purple text-white"
            >
                {{ searchTerm }}
                <button @click="removeTerm(i)">
                    <img src="~/assets/icons/close-circle.svg" class="h-5 pl-1">
                </button>
            </div>
        </div>
        <div :class="'grid justify-center gap-5 m-3 ' + (searchTerms.length == 0 ? 'sm:grid-cols-2' : 'lg:grid-cols-1 sm:grid-cols-2')">
            <CompositionPreview
                v-for="composition of compositions"
                :key="composition.slug"
                :composition="composition"
                :detailed-view="searchTerms.length == 0"
                :path="path"
            />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'MainView',
    props: {
        name: {
            type: Array,
            required: true
        },
        path: {
            type: String,
            default: ''
        }

    },
    data () {
        return {
            search: '',
            searchTerms: [] as string[],
            compositions: [] as any[]
        }
    },
    async fetch () {
        this.compositions = [].concat(...(await Promise.all((this.name).map(async (name) => {
            return await (await this.$content(name as string, { deep: true }).where({ extension: '.md' })
                .sortBy('createdAt', 'asc')
                .fetch())
                .filter((x: any) => x.slug.includes('1_'))
                .filter((x: any) => this.searchTerms.every((term: string) => x.tags.join('').match(RegExp(term, 'i'))))
        }))))
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
