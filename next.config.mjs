import nextra from "nextra";

const isPreview = process.env.PREVIEW === "true";

const withNextra = nextra({
  codeHighlight: true,
  defaultShowCopyCode: true,
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

export default withNextra({
  assetPrefix: isPreview ? undefined : "https://flakehub.com/docs",
  basePath: isPreview ? undefined : "/docs",
  images: {
    unoptimized: true,
  },
  output: "export",
  reactStrictMode: true,
});
