import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Default ignores of eslint-config-next, extended with this project's
  // own build output directories (Cloudflare/OpenNext), which aren't part
  // of eslint-config-next's defaults and were previously getting linted.
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    ".open-next/**",
    ".wrangler/**",
  ]),
]);

export default eslintConfig;
