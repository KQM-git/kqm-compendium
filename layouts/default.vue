<template>
  <div class="w-full min-h-screen bg-[#19191d] p-3">
    <div class="max-w-screen-lg mx-auto h-full">
      <img src="~/assets/logo.png" class="w-[15%]">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'DefaultLayout'
})
</script>
