import { hasUnocss } from "./env";
import {
  comments,
  ignores,
  imports,
  javascript,
  jsonc,
  markdown,
  node,
  prettier,
  react,
  sortKeys,
  sortPackageJson,
  sortTsconfig,
  typescript,
  unicorn,
  unocss,
  yml,
} from "./configs";
import type { FlatESLintConfigItem } from "eslint-define-config";

export const presetJavaScript = [
  ...ignores,
  ...javascript,
  ...comments,
  ...imports,
  ...unicorn,
  ...node,
];

/** Includes basic json(c) file support and sorting json keys */
export const presetJsonc = [...jsonc, ...sortPackageJson, ...sortTsconfig];
/** Includes markdown, yaml + `presetJsonc` support */
export const presetLangsExtensions = [...markdown, ...yml, ...presetJsonc];
/** Includes `presetJavaScript` and typescript support */
export const presetBasic = [...presetJavaScript, ...typescript, ...sortKeys];
/**
 * Includes
 * - `presetBasic` (JS+TS) support
 * - `presetLangsExtensions` (markdown, yaml, jsonc) support
 * - Vue support
 * - UnoCSS support (`uno.config.ts` is required)
 * - Prettier support
 */
export const presetAll = [
  ...presetBasic,
  ...presetLangsExtensions,
  ...unocss,
  ...prettier,
  ...react,
];
export { presetBasic as basic, presetAll as all };

export function wearzdk(
  config: FlatESLintConfigItem | FlatESLintConfigItem[] = [],
  {
    prettier: enablePrettier = true,
    markdown: enableMarkdown = true,
    unocss: enableUnocss = hasUnocss,
    react: enableReact = true,
  }: Partial<{
    prettier: boolean;
    markdown: boolean;
    unocss: boolean;
    sortKeys: boolean;
    react: boolean;
  }> = {},
): FlatESLintConfigItem[] {
  const configs = [...presetBasic, ...yml, ...presetJsonc];
  if (enableMarkdown) {
    configs.push(...markdown);
  }
  if (enableUnocss) {
    configs.push(...unocss);
  }
  if (enablePrettier) {
    configs.push(...prettier);
  }
  if (enableReact) {
    configs.push(...react);
  }
  if (Object.keys(config).length > 0) {
    configs.push(...(Array.isArray(config) ? config : [config]));
  }
  return configs;
}
