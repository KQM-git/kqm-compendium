<template>
    <div class="bg-[#28242c] p-5 m-3 rounded-xl text-white">
        <div class="w-full relative flex justify-between p-3">
            <div class="text-2xl lg:text-4xl font-bold">
                {{ composition.title }}
            </div>
            <div class="flex justify-end items-end">
                <p class="text-gray-500 text-xl">
                    {{ composition.authors.join(', ') }}
                </p>
            </div>
        </div>
        <div class="md:hidden w-full flex flex-col py-3 gap-5">
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
        <div class="w-full flex flex-row space-x-2 justify-center px-6">
            <a
                v-if="composition.sheet_url"
                class="w-3/12 h-8 bg-green-500 flex justify-center items-center text-xl text-white font-bold rounded-md"
                :href="composition.sheet_url"
            >
                Sheet
            </a>
            <a
                v-if="composition.gcsim_url"
                class="w-3/12 h-8 bg-blue-600 flex justify-center items-center text-xl text-white font-bold rounded-md"
                :href="composition.gcsim_url"
            >
                gcsim
            </a>
        </div>
        <div class="w-full flex flex-row grow basis-0 space-x-2 py-3 overflow-x-auto">
            <div
                v-for="character of composition.characters"
                :key="character.slug"
                class="w-3/12 bg-gray-700 rounded-lg min-w-[220px]"
            >
                <div
                    class="bg-cover rounded-t-lg relative"
                    :style="{ backgroundImage: `url(${require(`~/assets/icons/bg-tier${character.star}.png`)})` }"
                >
                    <img :src="require(`~/assets/character_thumbnails/${character.name}.png`)" class="mx-auto">
                    <div class="absolute bottom-1 w-full text-center flex flex-row justify-center">
                        <div class="w-10 h-10 flex justify-center items-center bg-purple-700 rotate-45 rounded-sm z-20">
                            <p class="w-full h-full items-center justify-center flex font-bold -rotate-45 text-2xl">
                                {{ `C${character.constellation}` }}
                            </p>
                        </div>
                        <div class="absolute -bottom-3 w-full h-4 bg-gray-700 rounded-[50%] z-0" />
                    </div>
                </div>
                <p class="text-xl font-bold text-center relative z-10">
                    {{ character.name }}
                </p>
                <div class="w-full relative z-10 grid grid-cols-2 justify-center items-center gap-3 p-3">
                    <div class="bg-gray-900 w-full h-full rounded-lg flex flex-row justify-center items-center">
                        <img
                            :src="require(`~/assets/weapons/${character.weapon.name}.png`)"
                            class="inline w-1/2"
                        >
                        <p class="text-xl font-bold">
                            {{ `R${character.weapon.refinement}` }}
                        </p>
                    </div>
                    <div class="bg-gray-900 w-full h-full rounded-lg flex flex-row justify-center items-center">
                        <img
                            v-for="artifact of character.artifacts"
                            :key="artifact"
                            :src="require(`~/assets/artifacts/${artifact}/flower.png`)"
                            class="inline w-1/2"
                        >
                    </div>
                </div>
                <div class="p-3">
                    <div class="flex items-center justify-between w-full">
                        <div class="flex flex-row items-center">
                            <img src="~/assets/icons/health.webp" class="h-5">
                            <p class="text-lg font-bold">
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
                            <p class="text-lg font-bold">
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
                            <p class="text-lg font-bold">
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
                            <p class="text-lg font-bold">
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
                            <p class="text-lg font-bold">
                                CRIT Rate
                            </p>
                        </div>
                        <p>
                            {{ character.cr }} %
                        </p>
                    </div>
                    <div class="flex items-center justify-between w-full">
                        <div class="flex flex-row items-center">
                            <img src="~/assets/icons/critical_hit.webp" class="h-5">
                            <p class="text-lg font-bold">
                                CRIT Damage
                            </p>
                        </div>
                        <p>
                            {{ character.cd }}
                        </p>
                    </div>
                    <div class="flex items-center justify-between w-full">
                        <div class="flex flex-row items-center">
                            <img src="~/assets/icons/energy_recharge.webp" class="h-5">
                            <p class="text-lg font-bold">
                                Energy Recharge
                            </p>
                        </div>
                        <p>
                            {{ character.er }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 py-3">
            <div class="w-full">
                <p class="text-3xl font-bold">
                    {{ totaldps }} DPS
                </p>
                <div class="flex flex-col my-3 gap-2">
                    <div
                        v-for="character of composition.characters"
                        :key="character.slug"
                        class="w-full flex flex-row"
                    >
                        <div class="w-2/5 md:w-1/4">
                            <img :src="require(`~/assets/character_thumbnails/${character.name}.png`)" class="w-1/2 mx-auto">
                            <p class="text-center text-xl font-bold">
                                {{ character.name }}
                            </p>
                            <p class="text-center text-xl font-bold text-gray-500">
                                {{ `${Math.round(character.dps/totaldps * 100)}%` }}
                            </p>
                        </div>
                        <div class="w-[75%] flex items-center">
                            <div class="w-full h-auto bg-gray-400">
                                <div
                                    class="h-8 bg-purple-700"
                                    :style="{ width: `${character.dps/totaldps * 100}%` }"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p class="text-3xl font-bold pb-4">
                    Rotation {{ composition.rotation.duration }}
                </p>
                <div class="h-0 pb-[56.25%] relative">
                    <iframe
                        class="absolute inset-0 w-full h-full"
                        :src="composition.rotation.video_url.includes('watch?v=') ? `https://www.youtube.com/embed/${composition.rotation.video_url.split('watch?v=').pop()}` : `https://www.youtube.com/embed/${composition.rotation.video_url.split('/').pop()}`"
                    />
                </div>
            </div>
        </div>
        <nuxt-content :document="composition" class="md:p-5 text-white" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'CompositionFullPage',
    validate ({ $content, params }) {
        return $content('comps', { deep: true }).where({ slug: params.slug }).fetch().then((results) => {
            return results.length > 0
        })
    },
    async asyncData ({ $content, params }) {
        const composition: any = await $content('comps', params.slug, params.slug).where({ extension: '.md' }).fetch()
        const totaldps = composition.characters.map((character: any) => character.dps).reduce((a: number, b: number) => a + b, 0)

        return { composition, totaldps }
    }
})
</script>

<style lang="postcss" scoped>
::v-deep .nuxt-content p {
  @apply pb-8
}
</style>
