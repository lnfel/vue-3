import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/

// https://vuejs.org/guide/extras/reactivity-transform.html#reactivity-transform
// reactivityTransforms at the time of this writing is an expiremental feature
// that allows omitting .value on a reactive data when accessing the data value
// to use reactivityTransforms use $ref instead of ref, no need to import $ref
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
