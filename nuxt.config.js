export default {
    // Allows testing on mobile
    server: {
        port: 3000,
        host: '0.0.0.0'
    },

    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'KQM Compendium',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            {
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'A collection of team calculations, rotations, and notes for Genshin Impact theorycrafting by KeqingMains.'
            },
            {
                name: 'format-detection',
                content: 'telephone=no'
            },
            {
                hid: 'og:site_name',
                name: 'og:site_name',
                content: 'KQM'
            },
            {
                hid: 'og:title',
                name: 'og:title',
                content: 'KQM Calculation Compendium'
            },
            {
                hid: 'og:description',
                name: 'og:description',
                content: 'A collection of team calculations, rotations, and notes for Genshin Impact theorycrafting by KeqingMains.'
            }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/main.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
    // https://go.nuxtjs.dev/content
        '@nuxt/content'
    ],

    // Content module configuration: https://go.nuxtjs.dev/config-content
    content: {
        markdown: {
            prism: {
                theme: 'prism-themes/themes/prism-vsc-dark-plus.css'
            }
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    // https://github.com/nuxt/postcss8/issues/24
        loaders: {
            css: {
                modules: false
            }
        }
    }
}
