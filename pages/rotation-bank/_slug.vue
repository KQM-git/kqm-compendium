<template>
    <div class="m-3 text-white">
        <p class="text-xl lg:text-4xl font-bold font-genshin pb-2">
            {{ composition.title }}
        </p>
        <p class="text-gray-500 text-xl">
            {{ composition.authors.join(', ') }}
        </p>

        <div class="flex flex-col gap-3 lg:flex-row justify-center items-center py-3">
            <div class="flex flex-row justify-center lg:justify-end items-center text-center gap-3">
                <div
                    class="flex flex-col items-center font-bold"
                    :class="{1: 'text-red-400', 2: 'text-yellow-400', 3: 'text-green-400'}[composition.healing]"
                >
                    <img src="~/assets/icons/healing.png" class="max-h-[33px]">
                    {{ {1: 'No Healing', 2: 'Some Healing', 3: 'Healing'}[composition.healing] }}
                </div>
                <div
                    class="flex flex-col items-center font-bold"
                    :class="{1: 'text-red-400', 2: 'text-yellow-400', 3: 'text-green-400'}[composition.shielding]"
                >
                    <img src="~/assets/icons/shield.png" class="max-h-[33px]">
                    {{ {1: 'No Shielding', 2: 'Some Shielding', 3: 'Shielding'}[composition.shielding] }}
                </div>
                <div
                    class="flex flex-col items-center font-bold"
                    :class="{1: 'text-green-400', 2: 'text-yellow-400', 3: 'text-red-400', 4: 'text-red-600'}[composition.difficulty]"
                >
                    <img :src="require(`~/assets/icons/star_${composition.difficulty}.png`)" class="max-h-[33px]">
                    {{ {1: 'Easy', 2: 'Medium', 3: 'Difficult', 4: 'Very Difficult'}[composition.difficulty] }}
                </div>
                <div
                    v-if="composition.target"
                    class="flex flex-col items-center font-bold"
                >
                    <img :src="require(`~/assets/icons/target_${composition.target}.png`)" class="max-h-[33px]">
                    {{ {1: 'Only ST', 2: 'Mostly ST', 3: 'AoE', 4: 'Only AoE'}[composition.target] }}
                </div>
            </div>
        </div>

        <div class="w-full flex flex-row grow space-x-2 py-3 overflow-x-auto">
            <div
                v-for="character of tab.characters"
                :key="character.slug"
                class="w-3/12 min-w-[200px]"
            >
                <div
                    class="bg-cover rounded-t-lg relative"
                    :style="{ backgroundImage: `url(${require(`~/assets/icons/bg-tier${character.star}.png`)})` }"
                >
                    <img :src="require(`~/assets/character_thumbnails/${character.name}.png`)" class="mx-auto">
                    <div class="absolute -bottom-3 w-full text-center flex flex-row justify-center">
                        <div class="w-10 h-10 flex justify-center items-center bg-kqm-purple rotate-45 rounded-sm z-20">
                            <p class="w-full h-full items-center justify-center flex font-bold -rotate-45 text-2xl">
                                {{ `C${character.constellation}` }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="rounded-b-lg bg-[#423745] border-2 border-[#584F65]">
                    <p class="pt-5 text-xl font-bold font-genshin text-center tracking-tight relative z-10">
                        {{ character.name }}
                    </p>
                    <div class="w-full relative z-10 grid grid-cols-2 justify-center items-center gap-3 p-3">
                        <div class="bg-[#2D282F] border-2 border-[#584F65] w-full h-full rounded-lg flex flex-row justify-center items-center">
                            <img
                                :src="require(`~/assets/weapons/${character.weapon.name}.png`)"
                                :title="character.weapon.name"
                                class="inline w-1/2"
                            >
                            <p class="text-xl font-bold">
                                {{ `R${character.weapon.refinement}` }}
                            </p>
                        </div>
                        <div class="bg-[#2D282F] border-2 border-[#584F65] w-full h-full rounded-lg flex flex-row justify-center items-center">
                            <img
                                v-for="artifact of character.artifacts"
                                :key="artifact"
                                :src="require(`~/assets/artifacts/${artifact}/flower.png`)"
                                :title="artifact"
                                class="inline w-1/2"
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-[#2D282F] border-2 border-[#584F65] rounded-xl w-full grid lg:grid-cols-2 p-3 gap-5 mb-3">
            <div class="text-xl font-bold">
                Pros
                <ul class="pl-5 text-gray-500">
                    <li v-for="pro of composition.pros" :key="pro" class="text-base font-normal list-disc">
                        {{ pro }}
                    </li>
                </ul>
            </div>
            <div class="text-xl font-bold">
                Cons
                <ul class="pl-5 text-gray-500">
                    <li v-for="con of composition.cons" :key="con" class="text-base font-normal list-disc">
                        {{ con }}
                    </li>
                </ul>
            </div>
        </div>

        <div
            v-if="tabs.length > 1"
            class="w-full flex flex-row space-x-3 overflow-x-auto pb-3"
        >
            <button
                v-for="(tab_title, i) in tabs.map(tab => tab.tab_title)"
                :key="i"
                :class="'border-2 border-[#584F65] rounded-lg text-lg font-bold p-2 ' + (tabIndex === i ? 'bg-kqm-purple' : 'bg-[#2D282F]')"
                @click="setTab(i)"
            >
                {{ tab_title }}
            </button>
        </div>

        <div class="p-3 mb-3 bg-[#2D282F] border-2 border-[#584F65] rounded-xl">
            <p class="text-3xl font-bold pb-4">
                Rotation {{ tab.rotation.duration }}
            </p>
            <div class="h-0 pb-[56.25%] relative">
                <iframe
                    class="absolute inset-0 w-full h-full"
                    :src="tab.rotation.video_url.includes('watch?v=') ? `https://www.youtube.com/embed/${tab.rotation.video_url.split('watch?v=').pop()}` : `https://www.youtube.com/embed/${tab.rotation.video_url.split('/').pop()}`"
                />
            </div>
        </div>

        <nuxt-content :document="tab" class="p-3 lg:p-5 text-white bg-[#2D282F] border-2 border-[#584F65] rounded-xl" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'RotationDetailPage',
    validate ({ $content, params }) {
        return $content({ deep: true }).fetch().then((results) => {
            return results.filter((obj: any) => obj.slug.includes(params.slug)).length > 0
        })
    },
    async asyncData ({ $content, params, query }) {
        let tabs: any[]
        try {
            const comps = await $content('comps', params.slug, { deep: true }).fetch() as any[]
            tabs = comps
        } catch (err) {
            const rotations = await $content('rotations', params.slug, { deep: true }).fetch() as any[]
            tabs = rotations
        }

        const composition = tabs[0]
        const tabIndex = Number(query.tab ?? 0)
        const tab = tabs[tabIndex]

        return { tabs, composition, tabIndex, tab }
    },
    data () {
        return {
            tabs: [] as any[],
            composition: {} as any,
            tabIndex: 0,
            tab: {} as any
        }
    },
    methods: {
        setTab (index: number) {
            this.tabIndex = index
            this.tab = this.tabs[index]
            if (index === 0) {
                this.$router.push(this.$route.path)
            } else {
                this.$router.push({ query: { tab: index.toString() } })
            }
        }
    }
})
</script>
