<template>
    <div class="relative w-full px-3">
        <div class="absolute bottom-0 z-10 text-white font-bold text-2xl sm:text-5xl m-3 sm:m-5">
            {{ name }}
        </div>
        <img :src="require(`~/assets/banners/${imageName}`)" class="brightness-50 rounded-3xl">
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'PageBanner',
    props: {
        name: {
            type: String,
            required: true
        },
        imageName: {
            type: String,
            required: true
        }
    }
})
</script>
