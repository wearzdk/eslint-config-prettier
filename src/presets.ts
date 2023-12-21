import { hasUnocss } from "./env";
import {
  comments,
  ignores,
  imports,
  javascript,
  jsonc,
  markdown,
  prettier,
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
];

export const presetJsonc = [...jsonc, ...sortPackageJson, ...sortTsconfig];
export const presetLangsExtensions = [...markdown, ...yml, ...presetJsonc];

export const basic = [...presetJavaScript, ...typescript];
export { basic as presetBasic };

export const all = [
  ...basic,
  ...presetLangsExtensions,
  ...sortKeys,
  ...unocss,
  ...prettier,
];

export function wearzdk(
  config: FlatESLintConfigItem | FlatESLintConfigItem[] = [],
  {
    prettier: enablePrettier = true,
    markdown: enableMarkdown = true,
    sortKeys: enableSortKeys = true,
    unocss: enableUnocss = hasUnocss,
  }: Partial<{
    vue: boolean;
    prettier: boolean;
    markdown: boolean;
    unocss: boolean;
    sortKeys: boolean;
  }> = {},
): FlatESLintConfigItem[] {
  const configs = [...basic, ...yml, ...presetJsonc];
  if (enableSortKeys) {
    configs.push(...sortKeys);
  }
  if (enableMarkdown) {
    configs.push(...markdown);
  }
  if (enableUnocss) {
    configs.push(...unocss);
  }
  if (enablePrettier) {
    configs.push(...prettier);
  }
  if (Object.keys(config).length > 0) {
    configs.push(...(Array.isArray(config) ? config : [config]));
  }
  return configs;
}
