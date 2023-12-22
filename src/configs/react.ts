import { isPackageExists } from "local-pkg";

import { GLOB_JSX, GLOB_TSX } from "../globs";
import { pluginReact, pluginReactHooks, pluginReactRefresh } from "../plugins";
import type { FlatESLintConfigItem } from "eslint-define-config";

export const react: FlatESLintConfigItem[] = [
  {
    files: [GLOB_JSX, GLOB_TSX],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      "react-refresh": pluginReactRefresh,
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,

      "react/jsx-boolean-value": ["error", "never"],
      "react/jsx-filename-extension": [
        "error",
        { extensions: [".tsx", ".jsx"] },
      ],
      "react/jsx-no-leaked-render": "error",
      "react/jsx-no-useless-fragment": "error",
      "react/jsx-pascal-case": "error",
      "react/jsx-props-no-multi-spaces": "error",
      "react/jsx-sort-props": "error",
      "react/no-invalid-html-attribute": "error",
      "react/prop-type": "off",
      "react/self-closing-comp": "error",

      ...(isPackageExists("react") ? {} : { "react/jsx-no-undef": "off" }),
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
