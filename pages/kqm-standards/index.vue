<template>
    <div>
        <page-banner name="KQM Standards" image-name="kqms.png" />

        <div class="m-3 py-3 px-5 bg-[#2D282F] border-2 border-[#584F65] rounded-xl text-white ">
            <p class="text-2xl font-bold">
                Current Revision: {{ changelog.current_revision }}
            </p>
            <p class="text-lg font-bold">
                Last Updated: {{ changelog.last_updated }}
            </p>
            <div class="flex flex-row justify-between items-end mt-1">
                <nuxt-content :document="{ body : changelog.excerpt }" />
                <button class="bg-[#423745] border-2 border-[#584F65] py-1 px-5 rounded-lg">
                    Changelog
                </button>
            </div>
        </div>

        <div class="toc m-3 py-3 px-5 bg-[#2D282F] border-2 border-[#584F65] rounded-xl text-white ">
            <p class="text-2xl font-bold">
                KQMS
            </p>
            <ul>
                <li
                    v-for="link of kqms.toc"
                    :key="link.id"
                >
                    <a
                        role="button"
                        class="text-lg"
                        :href="`#${link.id}`"
                    >
                        {{ link.text }}
                    </a>
                </li>
            </ul>
        </div>

        <div
            v-for="(section, index) in mainSection"
            :key="index"
            class="main m-3 py-3 px-5 bg-[#2D282F] border-2 border-[#584F65] rounded-xl text-white"
        >
            <nuxt-content :document="{ body: { children : section } }" />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PageBanner from '~/components/PageBanner.vue'

export default Vue.extend({
    name: 'IndexPage',
    components: { PageBanner },
    async asyncData ({ $content }) {
        const changelog: any = await $content('kqms', 'changelog').fetch()
        const kqms: any = await $content('kqms', 'kqms').fetch()
        const mainSection = []
        let currentSection = []
        for (let i = 0; i < kqms.body.children.length; i++) {
            const children = kqms.body.children[i]
            if (children.tag === 'h2' && i !== 0) {
                mainSection.push(currentSection)
                currentSection = []
                currentSection.push(children)
            } else if (i === kqms.body.children.length - 1) {
                currentSection.push(children)
                mainSection.push(currentSection)
            } else {
                currentSection.push(children)
            }
        }

        return { changelog, kqms, mainSection }
    }
})
</script>

<style lang="postcss" scoped>
::v-deep .nuxt-content > *::before {
    @apply block lg:h-0 lg:m-0 h-20 -mt-20 content-['']
}

::v-deep .main .nuxt-content ul, ol, .toc ul {
    @apply pl-5
}

::v-deep .main .nuxt-content ul p, ol p {
    @apply mb-1
}

::v-deep .main .nuxt-content ul > li, .toc ul > li {
    @apply list-disc
}

::v-deep .main .nuxt-content li * li {
    @apply list-[square]
}
::v-deep .main .nuxt-content li * li * li {
    @apply list-[circle]
}

::v-deep .main .nuxt-content h2 {
    @apply font-bold text-2xl
}
</style>
