import { GLOB_JSX, GLOB_TSX } from "../globs";

import { pluginNext } from "../plugins";
import type { FlatESLintConfigItem } from "eslint-define-config";

export const next: FlatESLintConfigItem[] = [
  {
    files: [GLOB_JSX, GLOB_TSX],
    plugins: {
      "@next/next": pluginNext,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs["core-web-vitals"].rules,
      "@next/next/no-img-element": "warn",
    },
  },
];
