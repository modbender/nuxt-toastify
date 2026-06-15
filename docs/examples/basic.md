---
title: Basic
description: A minimal end-to-end example — register the module and fire a success toast from a button. No plugin, no CSS import.
sidebar:
  order: 1
---

The smallest complete setup: register the module and trigger a toast from a button. There's nothing to mount and no stylesheet to import.

## 1. Register the module

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['nuxt-toastify'],
})
```

No options are required — the built-in defaults give you a top-right toast that auto-dismisses after 5 seconds with a progress bar.

## 2. Fire a toast

```vue
<!-- pages/index.vue -->
<script setup lang="ts">
function save() {
  useToastify.success('Saved successfully!')
}
</script>

<template>
  <button @click="save">Save</button>
</template>
```

Click the button and a green success toast slides in from the top-right, then disappears on its own a few seconds later.

## Multiple types

Each type helper gives you the matching color and icon:

```vue
<script setup lang="ts">
function demo() {
  useToastify.success('Profile updated')
  useToastify.info('Syncing in the background…')
  useToastify.warning('Storage almost full')
  useToastify.error('Could not reach the server')
}
</script>

<template>
  <button @click="demo">Show all types</button>
</template>
```

:::tip
`useToastify` and `ToastifyOption` are both auto-imported — you never have to write an import for them, and there's no toast container component to place in your layout.
:::

## Next steps

- [Positioning](/nuxt-toastify/examples/positioning/) — move toasts to a different corner and tune their duration.
- [Custom Styling](/nuxt-toastify/examples/custom-styling/) — themes, transitions, custom classes, and HTML content.
