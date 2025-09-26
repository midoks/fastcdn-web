import { createJiti } from "../../../node_modules/.pnpm/jiti@2.4.2/node_modules/jiti/lib/jiti.mjs";

const jiti = createJiti(import.meta.url, {
  "interopDefault": true,
  "alias": {
    "@vben/tailwind-config": "/Users/midoks/Desktop/mwdev/midoks/fastcdn-web/internal/tailwind-config"
  },
  "transformOptions": {
    "babel": {
      "plugins": []
    }
  }
})

/** @type {import("/Users/midoks/Desktop/mwdev/midoks/fastcdn-web/internal/tailwind-config/src/index.js")} */
const _module = await jiti.import("/Users/midoks/Desktop/mwdev/midoks/fastcdn-web/internal/tailwind-config/src/index.ts");

export default _module?.default ?? _module;