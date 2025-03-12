import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const filename = fileURLToPath(import.meta.url)
const dirPath = dirname(filename)  // Aqui mudei o nome para dirPath

const compat = new FlatCompat({
  baseDirectory: dirPath  // E usei o novo nome aqui também
})
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "warn", // Allow any type, but warn about it
      "semi": ["error", "never"], // Disallow semicolons at the end of statements
    }
  }
]

export default eslintConfig