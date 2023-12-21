# @wearzdk/eslint-config-prettier [![npm](https://img.shields.io/npm/v/@wearzdk/eslint-config-prettier.svg)](https://npmjs.com/package/@wearzdk/eslint-config-prettier)

Flat ESLint config for JavaScript, TypeScript, React, Prettier.

## Features

- Format with Prettier.
- Designed to work with TypeScript, React out-of-box.
- Support JSON(5), YAML, Markdown...
- Sort imports, `package.json`, `tsconfig.json`...
- [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new), compose easily!
- Reasonable defaults, best practices, only one-line of config

## Install

```bash
npm i -D @wearzdk/eslint-config-prettier
```

Require Node.js >= 16.14.

## Usage

```js
// eslint.config.js
import { all } from "@wearzdk/eslint-config-prettier";

export default all;
```

### Custom Config

```js
import { wearzdk } from "@wearzdk/eslint-config-prettier";
export default wearzdk(
  [
    /* your custom config */
  ],
  { vue: true, prettier: true, markdown: true, unocss: false },
);
```

### VSCode

```jsonc
{
  "eslint.experimental.useFlatConfig": true
}
```

## Comparing to [`@sxzz/eslint-config`](https://github.com/sxzz/eslint-config)
Add `React` support

## License

[MIT](./LICENSE)
