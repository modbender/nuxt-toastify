---
title: Usage
description: Fire toasts with the auto-imported useToastify() composable — type shortcuts, per-toast options, promises, updates, and programmatic removal.
sidebar:
  order: 3
---

Everything you do at runtime goes through `useToastify()`. It's auto-imported, so you can call it from any component, composable, or plugin without an import statement.

The module exposes two auto-imports, both pointing at `vue3-toastify`'s `toast` API:

| Auto-import | What it is |
| --- | --- |
| `useToastify` | The `toast()` function — call it to show a toast, and use its `.success` / `.error` / `.update` / `.remove` methods. |
| `ToastifyOption` | The same `toast` object, exposed for its constants like `ToastifyOption.POSITION` and `ToastifyOption.TYPE`. |

## Show a toast

Call `useToastify()` with a message and an optional options object:

```vue
<script setup lang="ts">
function notify() {
  // Basic toast with the module defaults
  useToastify('Wow so easy!')

  // Toast with per-call options
  useToastify('Saved your changes', {
    autoClose: 3000,
    position: ToastifyOption.POSITION.TOP_RIGHT,
    theme: 'dark',
  })
}
</script>

<template>
  <button @click="notify">Notify!</button>
</template>
```

Anything you pass in the options object overrides the global defaults from `nuxt.config.ts` for that single toast.

## Type shortcuts

Use the type helpers to get the right color and icon without passing `type` yourself:

```ts
useToastify.success('Saved successfully!')
useToastify.error('Something went wrong.')
useToastify.warning('Your session is about to expire.')
useToastify.info('A new version is available.')
```

Each accepts the same options object as the base call:

```ts
useToastify.success('Uploaded!', {
  autoClose: 1500,
  position: ToastifyOption.POSITION.BOTTOM_CENTER,
})
```

## Position and type constants

`ToastifyOption` carries the enums so you don't have to memorize the string literals:

```ts
useToastify('Top left', { position: ToastifyOption.POSITION.TOP_LEFT })
useToastify('Bottom right', { position: ToastifyOption.POSITION.BOTTOM_RIGHT })

// POSITION values:
//   TOP_LEFT, TOP_CENTER, TOP_RIGHT,
//   BOTTOM_LEFT, BOTTOM_CENTER, BOTTOM_RIGHT
```

The plain string literals (`'top-right'`, `'bottom-center'`, etc.) work too — the constants are just a typo-safe convenience.

## Promises

Drive a toast from a promise — it shows a pending message, then swaps to success or error automatically:

```ts
const fetchData = () =>
  fetch('https://api.example.com/data').then((r) => r.json())

useToastify.promise(fetchData(), {
  pending: 'Loading data…',
  success: 'Data loaded!',
  error: 'Failed to load data.',
})
```

You can use render functions for dynamic content based on the resolved value or thrown error:

```ts
useToastify.promise(fetchData(), {
  pending: 'Loading…',
  success: {
    render: (res) => `Loaded ${res.data.name}`,
    icon: '🎉',
  },
  error: {
    render: (err) => `Error: ${err.message}`,
  },
})
```

## Update an existing toast

`useToastify()` returns a toast id. Pass it to `.update()` to change a toast in place — useful for long-running work:

```ts
const id = useToastify('Uploading…', { autoClose: false })

// later, when the work finishes:
useToastify.update(id, {
  render: 'Upload complete!',
  type: ToastifyOption.TYPE.SUCCESS,
  autoClose: 3000,
})
```

## Remove toasts

```ts
const id = useToastify('This will be dismissed programmatically')

useToastify.remove(id) // remove one toast
useToastify.remove() // remove every toast
useToastify.clearAll() // clear all toasts
```

`useToastify.isActive(id)` returns whether a given toast is still on screen.

## Options API

If you're in the Options API, call the auto-imports the same way from a method:

```vue
<script>
export default {
  methods: {
    save() {
      useToastify.success('Your changes have been saved.')
    },
  },
}
</script>

<template>
  <button @click="save">Save</button>
</template>
```

:::tip
`useToastify` and `ToastifyOption` are both auto-imported — you never have to write an import for them.
:::

## Next steps

- [Configuration](/nuxt-toastify/configuration/) — set the global defaults every toast inherits.
- [Examples](/nuxt-toastify/examples/basic/) — copy-paste, end-to-end recipes.
