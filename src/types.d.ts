import type { ToastContainerOptions } from 'vue3-toastify'

export type ModuleOptions = ToastContainerOptions

declare module 'nuxt-toastify' {
  interface NuxtConfig {
    toastify?: ModuleOptions
  }

  interface NuxtOptions {
    toastify?: ModuleOptions
  }
}
