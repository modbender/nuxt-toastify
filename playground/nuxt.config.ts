export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2024-07-27',
  toastify: {
    autoClose: 2000,
    position: 'bottom-center',
    theme: 'dark',
  },
})
