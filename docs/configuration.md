---
title: Configuration
description: Set global toast defaults via the toastify key in nuxt.config.ts — position, theme, auto-close, progress bar, transitions, and more.
sidebar:
  order: 4
---

You configure global defaults under the `toastify` key in `nuxt.config.ts`. These become the baseline for every toast, and the module passes them straight to the `vue3-toastify` container.

```ts
export default defineNuxtConfig({
  modules: ['nuxt-toastify'],
  toastify: {
    autoClose: 2000,
    position: 'top-right',
    theme: 'auto',
  },
})
```

:::tip
Every option below can also be overridden for a single toast by passing it to `useToastify()`. The `toastify` config is just the default — see [Usage](/nuxt-toastify/usage/) for per-toast overrides.
:::

## What the module sets by default

Out of the box, the module applies these defaults so toasts look and behave well with no configuration:

| Option | Default |
| --- | --- |
| `multiple` | `true` |
| `newestOnTop` | `false` |
| `dangerouslyHTMLString` | `false` |
| `clearOnUrlChange` | `false` |
| `rtl` | `false` |
| `autoClose` | `5000` |
| `hideProgressBar` | `false` |
| `pauseOnHover` | `true` |
| `pauseOnFocusLoss` | `true` |
| `closeOnClick` | `true` |
| `theme` | `'auto'` |

Anything you set under the `toastify` key overrides these, and any option you don't set falls back to `vue3-toastify`'s own default.

:::caution
The module sets `clearOnUrlChange: false`, which differs from `vue3-toastify`'s own default of `true`. So by default a toast survives client-side navigation. Set `clearOnUrlChange: true` in your config if you'd rather dismiss toasts when the route changes.
:::

## Options reference

The `toastify` key accepts the underlying `vue3-toastify` container props:

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `position` | `'top-left' \| 'top-center' \| 'top-right' \| 'bottom-left' \| 'bottom-center' \| 'bottom-right'` | `'top-right'` | Where toasts appear on screen. |
| `autoClose` | `number \| false` | `5000` | Delay in ms before a toast closes. `false` keeps it open until dismissed. |
| `theme` | `'auto' \| 'light' \| 'dark' \| 'colored'` | `'auto'` | Visual theme. `'auto'` follows the system / `html.dark` preference. |
| `transition` | `'bounce' \| 'slide' \| 'flip' \| 'zoom'` (or a custom transition) | `'bounce'` | Enter/leave animation. |
| `multiple` | `boolean` | `true` | Allow several toasts at once. When `false`, a new toast replaces the current one. |
| `limit` | `number` | _(unlimited)_ | Maximum number of toasts shown at the same time. |
| `newestOnTop` | `boolean` | `false` | Stack the newest toast on top. |
| `hideProgressBar` | `boolean` | `false` | Hide the auto-close progress bar. |
| `pauseOnHover` | `boolean` | `true` | Pause the auto-close timer while hovering. |
| `pauseOnFocusLoss` | `boolean` | `true` | Pause the timer when the window loses focus. |
| `closeOnClick` | `boolean` | `true` | Dismiss a toast when it's clicked. |
| `closeButton` | `boolean \| VNode` | _(default button)_ | Replace the close button, or `false` to hide it. |
| `rtl` | `boolean` | `false` | Render right-to-left. |
| `clearOnUrlChange` | `boolean` | `false` | Clear all toasts on client-side route changes. |
| `dangerouslyHTMLString` | `boolean` | `false` | Allow rendering raw HTML strings in toast content. |
| `role` | `string` | `'alert'` | ARIA role applied to toasts for assistive technology. |
| `containerClassName` | `string` | `''` | Extra CSS class on the toast container. |
| `toastClassName` | `string` | `''` | Extra CSS class on each toast. |
| `bodyClassName` | `string` | `''` | Extra CSS class on the toast body. |
| `progressClassName` | `string` | `''` | Extra CSS class on the progress bar. |
| `style` | `CSSProperties` | _(none)_ | Inline styles for the container. |
| `icon` | `IconType` | _(per-type icon)_ | Custom default icon for toasts. |

For the complete, always-current list of container props, see the [vue3-toastify container API](https://vue3-toastify.js-bridge.com/api/container.html).

:::caution
`dangerouslyHTMLString: true` renders unescaped HTML in your toasts. Only enable it for content you fully trust — never for user-supplied strings — to avoid XSS.
:::

## Public vs private config

The module writes your `toastify` options into Nuxt's **public** runtime config (so the client plugin can read them) as well as the private one. Avoid putting secrets in `toastify` — these values ship to the browser.

## Next steps

- [Usage](/nuxt-toastify/usage/) — override any of these per toast at call time.
- [Examples](/nuxt-toastify/examples/positioning/) — position and styling recipes.
