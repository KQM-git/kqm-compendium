<template>
    <div>
        <div class="m-3 p-5 bg-[#2D282F] border-2 border-[#584F65] rounded-xl text-white text-lg">
            <p
                class="font-bold text-4xl"
                :class="{
                    'text-[#FF6060]': proposal.status === 'Denied',
                    'text-[#FFDB7D]': proposal.status === 'Proposed',
                    'text-[#64E271]': proposal.status === 'Accepted',
                }"
            >
                {{ proposal.status }}
            </p>
            {{ proposal.reason }}
            <p class="text-right text-[#979797]">
                {{ proposal.date }}
            </p>
        </div>

        <div class="flex flex-row justify-center gap-3">
            <a
                v-if="proposal.sheet_url"
                class="w-32 h-12 bg-green-500 flex justify-center items-center text-xl text-white font-bold rounded-md"
                :href="proposal.sheet_url"
                target="_blank"
            >
                Sheet
            </a>
        </div>

        <div
            v-for="(section, index) in mainSection"
            :key="index"
            class="main m-3 px-5 pt-5 pb-2 border-2 border-[#584F65] rounded-xl text-white text-lg"
            :class="section[0].tag === 'h2' ? 'bg-[#2D282F]' : 'bg-[#423745] -mt-6 rounded-t-none'"
        >
            <nuxt-content :document="{ body: { children : section } }" />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'ProposalDetailPage',
    validate ({ $content, params }) {
        return $content('kqms', 'proposals').where(
            { slug: params.slug }
        ).fetch().then((results) => {
            return results.length > 0
        })
    },
    async asyncData ({ $content, params }) {
        const proposal = await $content('kqms', 'proposals', params.slug).fetch() as any
        const mainSection = []
        let currentSection = []
        for (let i = 0; i < proposal.body.children.length; i++) {
            const children = proposal.body.children[i]
            if (['h2', 'h3'].includes(children.tag) && i !== 0) {
                mainSection.push(currentSection)
                currentSection = []
                currentSection.push(children)
            } else if (i === proposal.body.children.length - 1) {
                currentSection.push(children)
                mainSection.push(currentSection)
            } else {
                currentSection.push(children)
            }
        }

        return { proposal, mainSection }
    }
})
</script>

<style lang="postcss" scoped>
::v-deep .nuxt-content ul, ol, .toc ul {
    @apply pl-5
}

::v-deep .nuxt-content ul p, ol p {
    @apply mb-1
}

::v-deep .nuxt-content ul > li, .toc ul > li {
    @apply list-disc
}

::v-deep .nuxt-content li * li {
    @apply list-[square]
}
::v-deep .nuxt-content li * li * li {
    @apply list-[circle]
}

::v-deep .nuxt-content p {
    @apply pb-5
}

::v-deep .nuxt-content img {
    @apply mx-auto
}

::v-deep .nuxt-content h2 {
    @apply font-bold text-4xl pb-2
}

::v-deep .nuxt-content h3 {
    @apply font-bold text-2xl pb-1
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
