<template>
    <div>
        <page-banner name="KQM Standards" image-name="kqms.png" />

        <div class="m-3 p-5 bg-[#2D282F] border-2 border-[#584F65] rounded-xl text-white">
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

        <div class="toc m-3 p-5 bg-[#2D282F] border-2 border-[#584F65] rounded-xl text-white">
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
            class="main m-3 p-5 border-2 border-[#584F65] rounded-xl text-white"
            :class="section[0].tag === 'h2' ? 'bg-[#2D282F]' : 'bg-[#423745] -mt-6 rounded-t-none'"
        >
            <nuxt-content :document="{ body: { children : section } }" />
        </div>

        <div class="m-3 p-5 bg-[#2D282F] border-2 border-[#584F65] rounded-xl text-white text-4xl font-bold text-center">
            Any deviations from these assumptions must be clearly stated and explained.
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2">
            <div
                v-for="proposal of proposals"
                :key="proposal.slug"
                class="relative m-3 mb-5 p-5 bg-[#2D282F] border-2 border-[#584F65] rounded-xl text-white"
            >
                <p class="font-bold text-2xl">
                    {{ proposal.title }}
                </p>

                <p
                    class="font-bold text-lg"
                    :class="{
                        'text-[#FF6060]': proposal.status === 'Denied',
                        'text-[#FFDB7D]': proposal.status === 'Proposed',
                        'text-[#64E271]': proposal.status === 'Accepted',
                    }"
                >
                    Status: {{ proposal.status }}
                </p>

                {{ proposal.description }}

                <p class="text-right text-[#979797]">
                    {{ proposal.date }}
                </p>
                <div class="absolute flex justify-center items-center left-0 -bottom-5 w-full">
                    <a class="bg-[#423745] border-2 border-[#584F65] rounded-xl text-lg font-bold py-1 px-3 ">
                        Proposal
                    </a>
                </div>
            </div>
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
            if (['h2', 'h3'].includes(children.tag) && i !== 0) {
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
        const proposals = (await $content('kqms', 'proposals').fetch() as any[]).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

        return { changelog, kqms, mainSection, proposals }
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

::v-deep .main .nuxt-content h3 {
    @apply font-bold text-xl
}

::v-deep .nuxt-content table {
    @apply mb-3 font-bold
}

::v-deep .nuxt-content td, ::v-deep .nuxt-content th {
    @apply pl-5
}

::v-deep .nuxt-content tr:nth-child(2n) {
    @apply bg-[#6459685E]
}

::v-deep .nuxt-content th .s5 {
    @apply text-[#DCB131]
}

::v-deep .nuxt-content th .s4 {
    @apply text-[#9070A8]
}
</style>
