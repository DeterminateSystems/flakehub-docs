import nextra from "nextra";

const withNextra = nextra({
  codeHighlight: true,
  defaultShowCopyCode: true,
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

export default withNextra({
  basePath: "/docs",
  images: {
    unoptimized: true,
  },
  output: "export",
  reactStrictMode: true,
});
