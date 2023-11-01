import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  defaultShowCopyCode: true,
  themeConfig: "./theme.config.tsx",
});

export default withNextra({
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
});
