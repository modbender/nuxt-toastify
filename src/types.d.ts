import type { ToastContainerOptions } from 'vue3-toastify'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ModuleOptions extends ToastContainerOptions {
  // Define additional options here
}

declare module 'nuxt-toastify' {
  interface NuxtConfig {
    toastify?: ModuleOptions
  }

  interface NuxtOptions {
    toastify?: ModuleOptions
  }
}
