import vuePlugin from "eslint-plugin-vue";
import eslintRecommended from "@eslint/js";

export default [
  eslintRecommended.configs.recommended, // ESLint base rules
  {
    files: ["**/*.ts", "**/*.js", "**/*.vue"],
    plugins: {
      vue: vuePlugin, // Register the Vue plugin
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      ...vuePlugin.configs["vue3-recommended"].rules, // Spread Vue rules
      // Add your custom rules here
      "vue/attributes-order": "error", // Example rule from Vue plugin
    },
  },
];
