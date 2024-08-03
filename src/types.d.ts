import type { ToastContainerOptions } from 'vue3-toastify'

export interface ModuleOptions extends ToastContainerOptions {}

declare module 'nuxt-toastify' {
  interface NuxtConfig {
    toastify?: ModuleOptions
  }

  interface NuxtOptions {
    toastify?: ModuleOptions
  }
}
