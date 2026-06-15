---
title: Positioning
description: Anchor toasts to any corner and control how long they stay — globally in nuxt.config or per-toast at call time.
sidebar:
  order: 2
---

Position is set with the `position` option, and how long a toast stays is set with `autoClose` (in milliseconds). You can configure both globally for every toast, or override them for a single call.

## Position (global)

Set a default corner for every toast in `nuxt.config.ts`:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['nuxt-toastify'],
  toastify: {
    position: 'bottom-center',
  },
})
```

The available positions are: `top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, and `bottom-right`.

## Position (per toast)

Override the position for a single toast. Use the `ToastifyOption.POSITION` constants for typo-safe values:

```vue
<script setup lang="ts">
function notify() {
  useToastify('Top left', {
    position: ToastifyOption.POSITION.TOP_LEFT,
  })

  useToastify('Bottom right', {
    position: ToastifyOption.POSITION.BOTTOM_RIGHT,
  })
}
</script>

<template>
  <button @click="notify">Notify</button>
</template>
```

The plain strings (`'top-left'`, `'bottom-right'`, …) work too — the constants are just a convenience.

## Duration: global default

`autoClose` is the number of milliseconds a toast stays before it auto-dismisses. The module default is `5000` (5 seconds). Change it globally:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['nuxt-toastify'],
  toastify: {
    autoClose: 3000, // every toast stays 3 seconds by default
  },
})
```

## Duration: per-toast override

Pass `autoClose` to `useToastify()` to override the global default for just that toast:

```ts
// This one stays much longer than the global default
useToastify.info('Read me carefully.', {
  autoClose: 12000,
})
```

## A toast that never auto-closes

Set `autoClose: false` to keep a toast open until it's clicked or removed programmatically:

```ts
const id = useToastify('Action required — click to dismiss.', {
  autoClose: false,
})

// remove it yourself when appropriate:
// useToastify.remove(id)
```

:::tip
Pair `autoClose: false` with `closeOnClick: true` (the default) so users can dismiss the toast by clicking it. Otherwise it'll only go away when you call `useToastify.remove(id)`.
:::

## Next steps

- [Custom Styling](/nuxt-toastify/examples/custom-styling/) — themes, transitions, custom classes, and HTML content.
- [Configuration](/nuxt-toastify/configuration/) — the full list of global options.
