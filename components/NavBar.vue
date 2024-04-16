<template>
    <div class="w-full pb-16 lg:pb-0">
        <!-- Desktop -->
        <div class="hidden lg:flex justify-between">
            <div class="w-[15%] flex flex-row">
                <NuxtLink to="/" class="p-1 w-20">
                    <img src="~/assets/logo.png">
                </NuxtLink>
            </div>
            <div class="top-bar flex flex-row items-end">
                <NuxtLink to="/kqm-standards" class="text-white m-3 pb-1">
                    KQM Standards
                </NuxtLink>
            </div>
        </div>
        <!-- Mobile -->
        <div class="lg:hidden flex flex-row items-center pl-2 h-24 pb-8 w-full fixed top-0 z-30 bg-gradient-to-b from-[#19191d] via-[#19191d]">
            <button @click="drawer">
                <svg
                    class="h-8 w-8 fill-current text-white"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            <NuxtLink to="/" class="h-full">
                <img src="~/assets/logo.png" class="max-h-full">
            </NuxtLink>
        </div>

        <!-- Dark Background Transition -->
        <transition
            enter-class="opacity-0"
            enter-active-class="ease-out transition-medium"
            enter-to-class="opacity-100"
            leave-class="opacity-100"
            leave-active-class="ease-out transition-medium"
            leave-to-class="opacity-0"
        >
            <div
                v-show="isOpen"
                class="z-30 fixed inset-0 transition-opacity"
                @keydown.esc="isOpen = false"
            >
                <div
                    class="absolute inset-0 bg-black opacity-50"
                    tabindex="0"
                    @click="isOpen = false"
                />
            </div>
        </transition>

        <!-- Drawer Menu -->
        <aside
            class="p-5 transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
            :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
        >
            <div class="close">
                <button
                    class="absolute top-0 right-0 mt-4 mr-4"
                    @click="isOpen = false"
                >
                    <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <ul class="divide-y divide-kqm-purple">
                <li>
                    <NuxtLink
                        to="/"
                        class="my-4 inline-block"
                        @click.native="isOpen = false"
                    >
                        KQM Standards
                    </NuxtLink>
                </li>
            </ul>
        </aside>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data () {
        return {
            isOpen: false
        }
    },
    watch: {
        isOpen: {
            immediate: true,
            handler (isOpen) {
                if (process.client) {
                    if (isOpen) {
                        document.body.style.setProperty('overflow', 'hidden')
                    } else {
                        document.body.style.removeProperty('overflow')
                    }
                }
            }
        }
    },
    mounted () {
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && this.isOpen) {
                this.isOpen = false
            }
        })
    },
    methods: {
        drawer () {
            this.isOpen = !this.isOpen
        }
    }
})
</script>

<style lang="postcss" scoped>
.top-bar a.nuxt-link-exact-active {
    @apply text-white;
    box-shadow: 0 3px 0 #D19FF8;
}

li .nuxt-link-exact-active {
    @apply font-bold;
}
</style>
