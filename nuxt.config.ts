export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@vueuse/motion/nuxt'],
  css: ['~/assets/css/main.scss'],
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/portfolio' : '/',
  },
})