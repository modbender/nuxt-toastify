---
title: Custom Styling
description: Themes, enter/leave transitions, the progress bar, custom CSS classes, and rendering HTML or Vue components inside a toast.
sidebar:
  order: 3
---

Nuxt Toastify injects `vue3-toastify`'s styles for you, so toasts look right out of the box. You can still theme them, change the animation, hook in your own classes, and even render rich content.

## Themes

Set the visual theme globally. `'auto'` follows the system / `html.dark` preference:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['nuxt-toastify'],
  toastify: {
    theme: 'colored', // 'auto' | 'light' | 'dark' | 'colored'
  },
})
```

Or per toast:

```ts
useToastify.success('Saved!', { theme: 'dark' })
```

## Transitions

Change the enter/leave animation with `transition`:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['nuxt-toastify'],
  toastify: {
    transition: 'slide', // 'bounce' | 'slide' | 'flip' | 'zoom'
  },
})
```

```ts
// or per toast
useToastify('Whoosh', { transition: 'zoom' })
```

## Progress bar

The auto-close progress bar is shown by default. Hide it globally or per toast:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['nuxt-toastify'],
  toastify: {
    hideProgressBar: true,
  },
})
```

```ts
useToastify('No progress bar on this one', { hideProgressBar: true })
```

## Custom CSS classes

Attach your own classes to the container, each toast, the body, or the progress bar — handy for hooking into a design system or framework utilities:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['nuxt-toastify'],
  toastify: {
    toastClassName: 'my-toast rounded-xl font-medium',
    bodyClassName: 'my-toast-body',
    progressClassName: 'my-progress',
    containerClassName: 'my-toast-container',
  },
})
```

You can also pass `toastClassName` (and friends) per toast for one-off styling.

## HTML content

To render an HTML string, opt in with `dangerouslyHTMLString`:

```ts
useToastify('<strong>Done!</strong> Your export is ready.', {
  dangerouslyHTMLString: true,
})
```

:::caution
`dangerouslyHTMLString` renders raw, unescaped HTML. Only use it for content you fully control — never for user-supplied strings — or you risk an XSS vulnerability.
:::

## Rendering a Vue component

For rich, interactive content, pass a render function that returns a VNode instead of a plain string:

```vue
<script setup lang="ts">
import { h } from 'vue'

function richToast() {
  useToastify(
    () =>
      h('div', [
        h('strong', 'Upload complete'),
        h('p', 'profile-photo.png is now live.'),
      ]),
    { autoClose: 6000 },
  )
}
</script>

<template>
  <button @click="richToast">Show rich toast</button>
</template>
```

:::tip
Global config in `nuxt.config.ts` sets the baseline for every toast; any option you also pass to `useToastify()` wins for that single toast. So you can set a house style once and still special-case the occasional toast.
:::

## Next steps

- [Configuration](/nuxt-toastify/configuration/) — the complete option reference.
- [Usage](/nuxt-toastify/usage/) — promises, updating toasts in place, and programmatic removal.
