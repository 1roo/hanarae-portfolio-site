import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import tseslint from "typescript-eslint"
import jsxA11y from "eslint-plugin-jsx-a11y"
import prettier from "eslint-plugin-prettier"
import { globalIgnores } from "eslint/config"

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    ignores: ["node_modules", "dist"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
      "plugin:jsx-a11y/recommended",
      "plugin:prettier/recommended"
    ],
    plugins: {
      "jsx-a11y": jsxA11y,
      prettier: prettier
    },
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: globals.browser
    },
    rules: {
      "prettier/prettier": "error",
      "react/react-in-jsx-scope": "off"
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  }
])
