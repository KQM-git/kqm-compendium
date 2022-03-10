<template>
  <NuxtLink :to="`/${composition.slug}`">
    <div class="bg-[#28242c] p-5 rounded-xl text-white">
      <div class="w-full relative flex justify-between">
        <div class="text-4xl font-bold">
          {{ composition.title }}
        </div>
        <div class="flex justify-end items-end">
          <p class="text-gray-500 text-xl">
            {{ composition.authors.join(', ') }}
          </p>
        </div>
      </div>
      <div class="w-full flex flex-row gap-2 justify-center p-3">
        <div
          v-for="character of characters"
          :key="character.slug"
          class="w-3/12"
        >
          <div
            class="bg-cover rounded-t-lg relative"
            :style="{ backgroundImage: `url(${require(`~/assets/icons/bg-tier${character.star}.png`)})` }"
          >
            <img :src="require(`~/assets/character_thumbnails/${character.name}.png`)">
            <div class="absolute bottom-1 w-full text-center flex flex-row justify-center">
              <div class="w-6 h-6 flex justify-center items-center bg-purple-700 rotate-45 rounded-sm z-10">
                <p class="font-bold -rotate-45">
                  {{ `C${character.constellation}` }}
                </p>
              </div>
              <div class="absolute -bottom-3 w-full h-4 bg-gray-700 rounded-[50%]" />
            </div>
          </div>
          <div class="w-full bg-gray-700 relative z-10 rounded-b-lg grid grid-cols-2 justify-center items-center gap-0.5 p-1">
            <div class="bg-gray-900 w-full h-full rounded-lg flex flex-row justify-center items-center">
              <img
                :src="require(`~/assets/weapons/${character.weapon.name}.png`)"
                class="inline w-1/2"
              >
              <p class="text-xs font-bold">
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
          <p class="text-xl font-bold text-center">
            {{ character.name }}
          </p>
        </div>
      </div>
      <div class="w-full flex flex-row justify-evenly p-3 pt-0 text-center">
        <div
          class="flex flex-col items-center font-bold"
          :class="{1: 'text-red-400', 2: 'text-yellow-400', 3: 'text-green-400'}[composition.healing]"
        >
          <img src="~/assets/icons/healing.png" class="h-10">
          {{ {1: 'No Healing', 2: 'Some Healing', 3: 'Healing'}[composition.healing] }}
        </div>
        <div
          class="flex flex-col items-center font-bold"
          :class="{1: 'text-red-400', 2: 'text-yellow-400', 3: 'text-green-400'}[composition.shielding]"
        >
          <img src="~/assets/icons/shield.png" class="h-10">
          {{ {1: 'No Shielding', 2: 'Some Shielding', 3: 'Shielding'}[composition.shielding] }}
        </div>
        <div
          class="flex flex-col items-center font-bold"
          :class="{1: 'text-green-400', 2: 'text-yellow-400', 3: 'text-red-400'}[composition.difficulty]"
        >
          <img :src="require(`~/assets/icons/star_${composition.difficulty}.png`)" class="h-10">
          {{ {1: 'Easy', 2: 'Medium', 3: 'Difficult'}[composition.difficulty] }}
        </div>
      </div>
      <div class="w-full py-3 text-gray-500">
        {{ composition.tags.join(', ') }}
      </div>
      <div class="grid grid-cols-2 gap-5">
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
    </div>
  </NuxtLink>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CompositionPreview',
  props: {
    composition: {
      type: Object,
      required: true
    },
    characters: {
      type: Array,
      required: true
    }
  }
})
</script>
