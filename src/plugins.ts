/* eslint-disable import/first */

export type InteropDefault<T> = T extends { default: infer U } ? U : T;

/* #__NO_SIDE_EFFECTS__ */
function interopDefault<T>(m: T): InteropDefault<T> {
  return (m as any).default || m;
}

import * as _pluginAntfu from "eslint-plugin-antfu";
export const pluginAntfu: typeof import("eslint-plugin-antfu").default =
  interopDefault(_pluginAntfu);

// @ts-expect-error missing types
import * as _pluginComments from "eslint-plugin-eslint-comments";
export const pluginComments = interopDefault(_pluginComments);

// @ts-expect-error missing types
import * as _pluginMarkdown from "eslint-plugin-markdown";
export const pluginMarkdown = interopDefault(_pluginMarkdown);

import * as _pluginTypeScript from "@typescript-eslint/eslint-plugin";
export const pluginTypeScript: typeof import("@typescript-eslint/eslint-plugin") =
  interopDefault(_pluginTypeScript);

// @ts-expect-error missing types
import * as _pluginUnicorn from "eslint-plugin-unicorn";
export const pluginUnicorn = interopDefault(_pluginUnicorn);

import * as _pluginUnocss from "@unocss/eslint-plugin";
export const pluginUnocss: typeof import("@unocss/eslint-plugin").default =
  interopDefault(_pluginUnocss);

import * as _pluginPrettier from "eslint-plugin-prettier";
export const pluginPrettier = interopDefault(_pluginPrettier);

// @ts-expect-error missing types
import * as _configPrettier from "eslint-config-prettier";
export const configPrettier = interopDefault(_configPrettier);

// @ts-expect-error missing types
export * as pluginImport from "eslint-plugin-i";
export * as pluginJsonc from "eslint-plugin-jsonc";
// @ts-expect-error missing types
export * as pluginUnusedImports from "eslint-plugin-unused-imports";
// @ts-expect-error missing types
export * as pluginYml from "eslint-plugin-yml";
// @ts-expect-error missing types
export * as pluginSortKeys from "eslint-plugin-sort-keys";

// react
// @ts-expect-error missing types
import * as _pluginReact from "eslint-plugin-react";
export const pluginReact = interopDefault(_pluginReact);

// @ts-expect-error missing types
import * as _pluginReactHooks from "eslint-plugin-react-hooks";
export const pluginReactHooks = interopDefault(_pluginReactHooks);

// @ts-expect-error missing types
import * as _pluginReactRefresh from "eslint-plugin-react-refresh";
export const pluginReactRefresh = interopDefault(_pluginReactRefresh);

export * as parserTypeScript from "@typescript-eslint/parser";
export * as parserYml from "yaml-eslint-parser";
export * as parserJsonc from "jsonc-eslint-parser";
