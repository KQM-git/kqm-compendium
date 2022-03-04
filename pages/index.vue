<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 p-5">
    <composition-preview
      v-for="comp of comps.filter(x => x.extension == '.md')"
      :key="comp.slug"
      :composition="comp"
      :characters="comps.filter(x => x.dir.split('/').pop() == comp.slug && x.extension == '.yaml')"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CompositionPreview from '~/components/CompositionPreview.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { CompositionPreview },
  async asyncData ({ $content }) {
    const comps = await $content('comps', { deep: true }).sortBy('position').fetch()
    return { comps }
  }
})
</script>
