<h1 align="center">
   Nuxt Toastify
</h1>

<p align="center">
  <a href="https://npmjs.com/package/nuxt-toastify"><img src="https://img.shields.io/npm/v/nuxt-toastify/latest.svg?style=flat&colorA=020420&colorB=00DC82" alt="Nuxt Toastify - NPM Package" /></a>
<a href="https://npmjs.com/package/nuxt-toastify"><img src="https://img.shields.io/npm/dm/nuxt-toastify.svg?style=flat&colorA=020420&colorB=00DC82" alt="Nuxt Toastify - NPM Package Downloads" /></a>
<a href="https://npmjs.com/package/nuxt-toastify"><img src="https://img.shields.io/npm/l/nuxt-toastify.svg?style=flat&colorA=020420&" alt="Nuxt Toastify License" /></a>
<a href="https://nuxt.com"><img src="https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js" alt="Nuxt Toastify - Nuxt" /></a>
</p>

<p align="center">
  Wrapper for Vue3 Toastify for easy & instant Notifications/Toasts in Nuxt 3 App.
</p>

<p align="center">
  <img src="https://user-images.githubusercontent.com/5574267/130804494-a9d2d69c-f170-4576-b2e1-0bb7f13dd92d.gif" alt="Nuxt Toastify Preview" />
</p>

-----
- [✨ &nbsp;Release Notes](/CHANGELOG.md)
- 🏀&nbsp; [Online Demo](https://vue3-toastify.js-bridge.com/) | [Online Playground](https://stackblitz.com/github/modbender/nuxt-toastify?file=playground%2Fapp.vue)
- [📖 &nbsp;Documentation](https://vue3-toastify.js-bridge.com/get-started/introduction.html)

## Features

<!-- Highlight some of the features your module provide here -->
- Beautiful by default
- Easy to set up for real, you can make it work in less than 10sec!
- Super easy to customize
- RTL support
- You can limit the number of toast displayed at the same time
- Super easy to use an animation of your choice. Works well with animate.css for example
- Can display a Vue3 component inside the toast!
- Has onOpen and onClose hooks. Both can access the props passed to the vue3 component rendered inside the toast
- Can remove a toast programmatically
- Define behavior per toast
- Pause toast when the window loses focus 👁
- Fancy progress bar to display the remaining time
- Possibility to update a toast
- support dangerously html string render (default: false).
- Dark mode 🌒, automatic detection for system dark mode (html.dark)
- Colored theme
- Promise support
- And much more !

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add nuxt-toastify
```

That's it! You can now use Nuxt Toastify in your Nuxt app ✨


## Contribution
Any valid pull requests will be accepted. Thank you.

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```

</details>


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-toastify/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-toastify

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-toastify.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/nuxt-toastify

[license-src]: https://img.shields.io/npm/l/nuxt-toastify.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/nuxt-toastify

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
