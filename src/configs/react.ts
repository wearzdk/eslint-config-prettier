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
      // recommended rules react-hooks
      "react-hooks/exhaustive-deps": "warn",
      "react-hooks/rules-of-hooks": "error",

      // react refresh
      "react-refresh/only-export-components": "off",

      // recommended rules react
      "react/display-name": "error",
      "react/jsx-key": "error",
      "react/jsx-no-comment-textnodes": "error",
      "react/jsx-no-duplicate-props": "error",
      "react/jsx-no-target-blank": "error",
      "react/jsx-no-undef": "error",
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/no-children-prop": "error",
      "react/no-danger-with-children": "error",
      "react/no-deprecated": "error",
      "react/no-direct-mutation-state": "error",
      "react/no-find-dom-node": "error",
      "react/no-is-mounted": "error",
      "react/no-render-return-value": "error",
      "react/no-string-refs": "error",
      "react/no-unescaped-entities": "error",
      "react/no-unknown-property": "error",
      "react/no-unsafe": "off",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react/require-render-return": "error",

      ...(isPackageExists("react") ? {} : { "react/jsx-no-undef": "off" }),
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
