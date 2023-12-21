import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
require("sucrase/register");
/** @type {typeof import('./src/index.ts')} */
const { wearzdk } = require("./src/index.ts");

// import { sxzz } from './dist/index.js'

export default wearzdk([
  {
    files: ["src/**/*.ts"],
    rules: {
      "sort-keys/sort-keys-fix": "error",
    },
  },
]);
