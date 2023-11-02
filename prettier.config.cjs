/** @type {import('prettier').Config} */
module.exports = {
  plugins: [
    require.resolve("@trivago/prettier-plugin-sort-imports"),
    require.resolve("prettier-plugin-tailwindcss"),
  ],
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
  // Import sorting
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  // Tailwind
  tailwindFunctions: ["clsx"],
};
