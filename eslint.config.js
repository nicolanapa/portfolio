import globals from "globals";
import pluginJs from "@eslint/js";

export default [
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    {
        files: ["**/*.jsx", "**/*.js"],
        languageOptions: { parserOptions: { ecmaFeatures: { ecmaVersion: "latest" }, sourceType: "module" } },
    },
    {
        rules: {
            "no-unused-vars": "warn",
        },
    },
];

