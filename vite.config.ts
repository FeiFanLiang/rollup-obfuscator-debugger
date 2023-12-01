import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import eslint from "vite-plugin-eslint";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import Unocss from "unocss/vite";
import { presetUno } from "unocss";
import mkcert from "vite-plugin-mkcert";
import Icons from "unplugin-icons/vite";
import { FileSystemIconLoader } from "unplugin-icons/loaders";
import legacy from "@vitejs/plugin-legacy";
import { obfuscator } from "rollup-obfuscator";
import ViteCompression from 'vite-plugin-compression'

export default defineConfig(({ mode }) => {
  console.log(mode, "mode");
  return {
    base: mode === "production" ? "/" : "/",
    plugins: [

      vue({
        template: {
          compilerOptions: {
            isCustomElement: (tag) => tag.includes('lottie-player')
          }
        }
      }),
      vueJsx(),
      eslint({
        fix: true,
      }),
      Icons({
        compiler: "vue3",
        autoInstall: true,
        defaultClass: "tg-icon",
        customCollections: {
          "tg-icon": FileSystemIconLoader("src/assets/svg", (svg) =>
            svg.replace(/^<svg /, '<svg fill="currentColor" ')
          ),
        },
        transform(svg, collection, icon) {
          //console.log(svg.replace(/^<svg /, '<svg fill="currentColor" '))
          // apply fill to this icon on this collection
          return svg.replace(/^<svg/, '<svg fill="currentColor" ');
        },
      }),
      Unocss({
        presets: [presetUno()],
        rules: [],
      }),
      AutoImport({
        eslintrc: {
          enabled: false,
          globalsPropValue: "readonly",
        },
        imports: [
          "vue",
          "vue-router",
          "pinia",
          {
            "naive-ui": [
              "useDialog",
              "useMessage",
              "useNotification",
              "useLoadingBar",
            ],
          },
        ],
      }),
      Components({
        resolvers: [NaiveUiResolver()],
      }),
      //mkcert(),

      legacy({
        targets: ['ie >= 11', 'chrome 52', 'defaults', 'ios >= 9', 'android >= 5.0', '> 1%'],
        modernPolyfills: ['es.global-this']
      }),
      ViteCompression({
        threshold: 300000
      }),
      obfuscator({
        compact: true,
        controlFlowFlattening: false,
        sourceMap: false,
        unicodeEscapeSequence: true,
        stringArrayRotate: true,
        stringArrayEncoding: ['base64'],
        stringArrayShuffle: true,
        identifierNamesGenerator: 'hexadecimal',
        stringArray: true,
        splitStrings: true,
        stringArrayThreshold: 1,
        transformObjectKeys: true,
        numbersToExpressions: true
      }),
    ],
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: ``,
        },
      },
    },
    build: {
      sourcemap: false,
      minify: "terser",
    },
    server: {
      open: true,
      //https: true,
      port: 8080,
      hmr: {
        protocol: "ws",
        host: "localhost",
      },
      proxy: {
        "/api": {
          target: "http://127.0.0.1:8087",
          rewrite: (path) => {
            return path.replace(/^\/api/, "");
          },
          changeOrigin: true,
        },
      },
    },
  };
});
