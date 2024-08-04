import Vue3Toastify from "vue3-toastify";
import { defineNuxtPlugin, useRuntimeConfig } from "#app";

export default defineNuxtPlugin((_nuxtApp) => {
  const toastifyContainerConfig = useRuntimeConfig().public.toastify || {};

  _nuxtApp.vueApp.use(Vue3Toastify, toastifyContainerConfig);
});
