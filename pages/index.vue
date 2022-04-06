<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
    <CompositionPreview
      v-for="composition of compositions.filter(x => x.extension == '.md')"
      :key="composition.slug"
      :composition="composition"
      :characters="characters.filter(x => x.dir.split('/').pop() == composition.slug)"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  async asyncData ({ $content }) {
    const compositions = await $content('comps', { deep: true }).where({ extension: '.md' }).fetch()
    const characters = await $content('comps', { deep: true }).where({ extension: '.yaml' }).sortBy('position').fetch()
    return { compositions, characters }
  }
})
</script>
