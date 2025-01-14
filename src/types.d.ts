export type { ToastContainerOptions as ModuleOptions } from 'vue3-toastify'

declare module 'nuxt-toastify' {
  interface NuxtConfig {
    toastify?: ModuleOptions
  }

  interface NuxtOptions {
    toastify?: ModuleOptions
  }
}
