<template>
    <div class="relative px-3">
        <div class="absolute bottom-0 z-10 text-white font-bold text-2xl sm:text-5xl m-3 sm:m-5">
            {{ name }}
        </div>
        <img :src="require(`~/assets/banners/${imageName}`)" class="w-full h-28 sm:h-40 lg:h-60 object-cover brightness-50 rounded-3xl">
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
