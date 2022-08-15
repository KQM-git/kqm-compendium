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
                    <img src="~/assets/icons/healing.png" class="lg:h-10 max-h-10">
                    {{ {1: 'No Healing', 2: 'Some Healing', 3: 'Healing'}[composition.healing] }}
                </div>
                <div
                    class="flex flex-col items-center font-bold"
                    :class="{1: 'text-red-400', 2: 'text-yellow-400', 3: 'text-green-400'}[composition.shielding]"
                >
                    <img src="~/assets/icons/shield.png" class="lg:h-10 max-h-10">
                    {{ {1: 'No Shielding', 2: 'Some Shielding', 3: 'Shielding'}[composition.shielding] }}
                </div>
                <div
                    class="flex flex-col items-center font-bold"
                    :class="{1: 'text-green-400', 2: 'text-yellow-400', 3: 'text-red-400', 4: 'text-red-600'}[composition.difficulty]"
                >
                    <img :src="require(`~/assets/icons/star_${composition.difficulty}.png`)" class="lg:h-10 max-h-10">
                    {{ {1: 'Easy', 2: 'Medium', 3: 'Difficult', 4: 'Very Difficult'}[composition.difficulty] }}
                </div>
                <div
                    v-if="composition.target"
                    class="flex flex-col items-center font-bold"
                >
                    <img :src="require(`~/assets/icons/target_${composition.target}.png`)" class="lg:h-10 max-h-10">
                    {{ {1: 'Only ST', 2: 'Mostly ST', 3: 'AoE', 4: 'Only AoE'}[composition.target] }}
                </div>
            </div>
            <div class="flex flex-row justify-center lg:justify-start gap-3">
                <a
                    v-if="tab.sheet_url"
                    class="w-16 h-8 bg-green-500 flex justify-center items-center text-xl text-white font-bold rounded-md"
                    :href="tab.sheet_url"
                    target="_blank"
                >
                    Sheet
                </a>
                <a
                    v-if="tab.gcsim_url"
                    class="w-16 h-8 bg-blue-600 flex justify-center items-center text-xl text-white font-bold rounded-md"
                    :href="tab.gcsim_url"
                    target="_blank"
                >
                    gcsim
                </a>
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
                    <div class="p-2">
                        <div class="flex items-center justify-between w-full">
                            <div class="flex flex-row items-center">
                                <img src="~/assets/icons/health.webp" class="h-5">
                                <p class="leading-tight text-lg font-bold">
                                    HP
                                </p>
                            </div>
                            <p>
                                {{ character.hp }}
                            </p>
                        </div>
                        <div class="flex items-center justify-between w-full">
                            <div class="flex flex-row items-center">
                                <img src="~/assets/icons/attack.webp" class="h-5">
                                <p class="leading-tight text-lg font-bold">
                                    ATK
                                </p>
                            </div>
                            <p>
                                {{ character.atk }}
                            </p>
                        </div>
                        <div class="flex items-center justify-between w-full">
                            <div class="flex flex-row items-center">
                                <img src="~/assets/icons/defense.webp" class="h-5">
                                <p class="leading-tight text-lg font-bold">
                                    DEF
                                </p>
                            </div>
                            <p>
                                {{ character.def }}
                            </p>
                        </div>
                        <div class="flex items-center justify-between w-full">
                            <div class="flex flex-row items-center">
                                <img src="~/assets/icons/elemental_mastery.webp" class="h-5">
                                <p class="leading-tight text-lg font-bold">
                                    Elemental Mastery
                                </p>
                            </div>
                            <p>
                                {{ character.em }}
                            </p>
                        </div>
                        <div class="flex items-center justify-between w-full">
                            <div class="flex flex-row items-center">
                                <img src="~/assets/icons/critical_hit.webp" class="h-5">
                                <p class="leading-tight text-lg font-bold">
                                    CRIT Rate
                                </p>
                            </div>
                            <p class="whitespace-nowrap">
                                {{ character.cr }}%
                            </p>
                        </div>
                        <div class="flex items-center justify-between w-full">
                            <div class="flex flex-row items-center">
                                <img src="~/assets/icons/critical_hit.webp" class="h-5">
                                <p class="leading-tight text-lg font-bold">
                                    CRIT Damage
                                </p>
                            </div>
                            <p class="whitespace-nowrap">
                                {{ character.cd }}%
                            </p>
                        </div>
                        <div class="flex items-center justify-between w-full">
                            <div class="flex flex-row items-center">
                                <img src="~/assets/icons/energy_recharge.webp" class="h-5">
                                <p class="leading-tight text-lg font-bold">
                                    Energy Recharge
                                </p>
                            </div>
                            <p class="whitespace-nowrap">
                                {{ character.er }}%
                            </p>
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
            class="w-full flex flex-row space-x-3 overflow-x-auto"
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

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 py-3">
            <div class="w-full p-3 bg-[#2D282F] border-2 border-[#584F65] rounded-xl">
                <p class="text-3xl font-bold">
                    {{ totaldps }} DPS
                </p>
                <div class="flex flex-col my-3 gap-2">
                    <div
                        v-for="character of tab.characters"
                        :key="character.slug"
                        class="w-full flex flex-row"
                    >
                        <div class="w-2/5 md:w-1/4">
                            <img :src="require(`~/assets/character_thumbnails/${character.name}.png`)" class="w-1/2 mx-auto">
                            <p class="text-center font-genshin relative">
                                {{ character.name }}
                            </p>
                            <p class="text-center text-xl font-bold text-gray-500">
                                {{ `${Math.round(character.dps/totaldps * 100)}%` }}
                            </p>
                        </div>
                        <div class="w-[75%] flex items-center">
                            <div class="w-full h-auto bg-gray-400">
                                <div
                                    class="h-8 bg-kqm-purple"
                                    :style="{ width: `${character.dps/totaldps * 100}%` }"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-3 bg-[#2D282F] border-2 border-[#584F65] rounded-xl">
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
        </div>

        <nuxt-content :document="tab" class="p-3 lg:p-5 text-white bg-[#2D282F] border-2 border-[#584F65] rounded-xl" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'CompositionFullPage',
    validate ({ $content, params }) {
        return $content('comps', params.slug, { deep: true }).fetch().then((results) => {
            return results.length > 0
        })
    },
    async asyncData ({ $content, params, query }) {
        const tabs = await $content('comps', params.slug, { deep: true }).fetch() as any[]
        const composition = tabs[0]
        const tabIndex = Number(query.tab ?? 0)
        const tab = tabs[tabIndex]
        const totaldps = tab.characters.map((character: any) => character.dps).reduce((a: number, b: number) => a + b, 0)

        return { tabs, composition, tabIndex, tab, totaldps }
    },
    data () {
        return {
            tabs: [] as any[],
            composition: {} as any,
            tabIndex: 0,
            tab: {} as any,
            totaldps: 0
        }
    },
    methods: {
        setTab (index: number) {
            this.tabIndex = index
            this.tab = this.tabs[index]
            this.totaldps = this.tab.characters.map((character: any) => character.dps).reduce((a: number, b: number) => a + b, 0)
            if (index === 0) {
                this.$router.push(this.$route.path)
            } else {
                this.$router.push({ query: { tab: index.toString() } })
            }
        }
    }
})
</script>

<style lang="postcss" scoped>
::v-deep .nuxt-content p {
  @apply pb-8
}

::v-deep .nuxt-content h1 {
  @apply text-2xl
}
</style>
