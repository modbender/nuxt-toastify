---
title: Installation
description: Install Nuxt Toastify, register it in nuxt.config, and optionally override the global defaults — no plugin or CSS import required.
sidebar:
  order: 2
---

Getting Nuxt Toastify running takes one step: add the module. There's no component to mount and no stylesheet to import — the module handles both.

## 1. Add the module

The quickest way is the Nuxt CLI, which installs the package and adds it to your `nuxt.config` for you:

```bash
npx nuxi@latest module add nuxt-toastify
```

### Manual install

If you'd rather install it by hand, add the package with your preferred package manager:

```bash
# pnpm
pnpm add nuxt-toastify
```

```bash
# npm
npm install nuxt-toastify
```

```bash
# yarn
yarn add nuxt-toastify
```

Then add `'nuxt-toastify'` to the `modules` array in `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ['nuxt-toastify'],
})
```

## 2. (Optional) Override the defaults

The module is zero-config — it works the moment it's registered. If you want to change the global behavior, add a `toastify` key to `nuxt.config.ts`. These settings apply to every toast unless overridden per call:

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

See [Configuration](/nuxt-toastify/configuration/) for the full list of options and their defaults.

## No CSS import needed

You don't have to import any stylesheet. The module automatically registers a client plugin and injects `vue3-toastify/dist/index.css`, so toasts are styled correctly the moment you call `useToastify()`.

:::tip
Because the toast container is mounted by the module's plugin, there is no `<...Container />` component for you to place in your app tree. Just call `useToastify()` and a toast appears.
:::

## Next steps

- [Usage](/nuxt-toastify/usage/) — fire your first toast with `useToastify()`.
- [Configuration](/nuxt-toastify/configuration/) — change the global defaults (position, theme, duration, and more).
