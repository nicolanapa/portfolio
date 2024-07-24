module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: ["eslint:recommended", "prettier"],
    ignorePatterns: [".eslintrc.cjs"],
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    rules: {
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
};

