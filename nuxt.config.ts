// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    strict: true,
  },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true,
  },
  runtimeConfig: {
    public: {
      apiBase: 'https://rickandmortyapi.com/api',
    },
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Wubba Lubba Nuxt-Dub',
      meta: [
        {
          name: 'description',
          content: 'Rick and Morty Nuxt app',
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
})
