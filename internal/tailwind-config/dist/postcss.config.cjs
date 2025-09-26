const { createJiti } = require("../../../node_modules/.pnpm/jiti@2.4.2/node_modules/jiti/lib/jiti.cjs")

const jiti = createJiti(__filename, {
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

/** @type {import("/Users/midoks/Desktop/mwdev/midoks/fastcdn-web/internal/tailwind-config/src/postcss.config.js")} */
module.exports = jiti("/Users/midoks/Desktop/mwdev/midoks/fastcdn-web/internal/tailwind-config/src/postcss.config.ts")