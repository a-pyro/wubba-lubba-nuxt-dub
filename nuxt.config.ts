// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    strict: true,
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
