import {
  defineNuxtModule,
  addPlugin,
  addImports,
  createResolver,
} from "@nuxt/kit";

import { defu } from "defu";

import { name, version } from "../package.json";

import type { ModuleOptions } from "./types";

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: "toastify",
    compatibility: {
      nuxt: ">=3.0.0",
    },
  },
  defaults: {
    multiple: true,
    newestOnTop: false,
    dangerouslyHTMLString: false,
    clearOnUrlChange: true,
    rtl: false,
    autoClose: 5000,
    hideProgressBar: false,
    pauseOnHover: true,
    pauseOnFocusLoss: true,
    closeOnClick: true,
    theme: "auto",
  },
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url);

    _nuxt.options.css = [
      ...(_nuxt.options.css || []),
      "vue3-toastify/dist/index.css",
    ];

    _nuxt.options.build.transpile = [
      ...(_nuxt.options.build.transpile || []),
      "vue3-toastify",
    ];

    addPlugin(resolver.resolve("./runtime/plugin"));

    addImports([
      {
        name: "toast",
        as: "useToastify",
        from: "vue3-toastify",
      },
      {
        name: "toast",
        as: "ToastifyOption",
        from: "vue3-toastify",
      },
    ]);
  },
});
