---
title: Nuxt Toastify
description: A Nuxt module that drops Vue 3 Toastify into your Nuxt 3 or Nuxt 4 app with zero config — auto-imported toasts, injected styles, and SSR-safe defaults.
sidebar:
  order: 1
---

Adding toast notifications to a Nuxt app usually means installing a library, registering a plugin, and remembering to import a stylesheet. Nuxt Toastify does all of that for you.

It's a thin, well-behaved wrapper around the excellent [vue3-toastify](https://github.com/jerrywu001/vue3-toastify) library that makes toast notifications work out of the box in Nuxt. Install it, and call `useToastify()` from anywhere — no plugin wiring, no manual CSS import.

## Key features

- **Zero config** — install the module and you're done. The plugin, styles, and auto-imports are all wired up for you.
- **Auto-imported** — `useToastify` and `ToastifyOption` are available everywhere without an import statement.
- **Sensible defaults** — 5-second auto-dismiss, pause-on-hover, automatic dark-mode detection, and a progress bar, all configurable.
- **SSR-safe** — the plugin runs client-side, so there's no hydration mismatch and no flash of unstyled content.
- **Fully featured** — promises, programmatic updates, custom components inside toasts, RTL support, theming, and limiting the number of visible toasts.
- **Nuxt 3 + Nuxt 4** — a single install supports both major versions.

## A 30-second taste

Install the module:

```bash
npx nuxi@latest module add nuxt-toastify
```

Then fire a toast from anywhere — no import needed:

```vue
<script setup lang="ts">
function notify() {
  useToastify('Wow so easy!', {
    autoClose: 2000,
    position: ToastifyOption.POSITION.TOP_RIGHT,
  })
}
</script>

<template>
  <button @click="notify">Notify!</button>
</template>
```

That's the whole thing. There's no component to mount and no stylesheet to import — the module injects `vue3-toastify`'s container and styles for you.

## Compatibility

| | Supported |
| --- | --- |
| Nuxt Toastify | 1.x |
| Nuxt | 3.x and 4.x |
| Vue | 3 |

:::tip
Nuxt Toastify 1.x supports both Nuxt 3 and Nuxt 4 from the same package — there's nothing extra to configure when you upgrade Nuxt.
:::

## Where to next

- [Installation](/nuxt-toastify/installation/) — add the module and override defaults.
- [Usage](/nuxt-toastify/usage/) — fire toasts with `useToastify()`, type shortcuts, promises, and updates.
- [Configuration](/nuxt-toastify/configuration/) — set global defaults via the `toastify` key in `nuxt.config.ts`.
