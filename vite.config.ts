import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: process.env.BASE_ENV,
  resolve: {
    extensions: [
      ".mjs",
      ".js",
      ".ts",
      ".jsx",
      ".tsx",
      ".json",
      ".vue",
      ".d.ts",
    ],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
  },
  test: {
    // グローバル変数としてテスト関数（describe, it, expect など）を使用可能にする
    globals: true,

    // テスト環境として jsdom を使用（ブラウザ環境をシミュレート）
    environment: "jsdom",

    // テストファイルのパターンを指定（すべてのテストファイルを含む）
    include: ["**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],

    coverage: {
      // カバレッジプロバイダーとして v8 を使用
      provider: "v8",

      // カバレッジレポートの出力形式（テキスト、JSON、HTML）
      reporter: ["text", "json", "html"],

      // カバレッジ計測の対象ファイル（src/utils 内の全 TypeScript ファイル）
      include: ["src/utils/**/*.ts"],

      // カバレッジ計測から除外するファイル
      exclude: [
        "node_modules/", // node_modules ディレクトリを除外
        "tests/", // tests ディレクトリを除外
        "**/*.d.ts", // 型定義ファイルを除外
        "**/*.test.ts", // テストファイルを除外
        "**/*.spec.ts", // スペックファイルを除外
      ],
      all: true,
      clean: true,
    },
  },
});
