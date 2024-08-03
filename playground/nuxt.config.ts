export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  modules: ["../src/module"],
  toastify: {
    autoClose: 2000,
    position: "top-center",
    theme: "dark",
  },
  devtools: { enabled: true },
  compatibilityDate: "2024-07-27",
});
