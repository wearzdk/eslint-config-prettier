import process from "node:process";
import { isPackageExists } from "local-pkg";

export const isInEditor =
  (process.env.VSCODE_PID || process.env.JETBRAINS_IDE) && !process.env.CI;
export const hasTypeScript = isPackageExists("typescript");

export const hasUnocss =
  isPackageExists("unocss") ||
  isPackageExists("@unocss/webpack") ||
  isPackageExists("@unocss/nuxt");

export const hasReact =
  isPackageExists("react") || isPackageExists("react-dom");

export const hasNext =
  isPackageExists("next") || isPackageExists("next-compose-plugins");
