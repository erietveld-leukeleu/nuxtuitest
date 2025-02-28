// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxt/ui"],
  colorMode: {
    preference: 'light'
  },
  imports: {
    dirs: [
      'types'
    ]
  }
})
