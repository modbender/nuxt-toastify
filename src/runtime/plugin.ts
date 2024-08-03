import { defineNuxtPlugin, useRuntimeConfig } from "#app";

import Vue3Toastify, { toast } from "vue3-toastify";

export default defineNuxtPlugin((_nuxtApp: any) => {
  const toastifyContainerConfig = useRuntimeConfig().public.toastify || {};

  _nuxtApp.vueApp.use(Vue3Toastify, toastifyContainerConfig);
});
