import nextra from "nextra";

const isProd = process.env.NODE_ENV === "production";

const withNextra = nextra({
  codeHighlight: true,
  defaultShowCopyCode: true,
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

export default withNextra({
  assetPrefix: isProd ? "https://flakehub.com/docs" : undefined,
  basePath: isProd ? "/docs" : undefined,
  images: {
    unoptimized: true,
  },
  output: "export",
  reactStrictMode: true,
});
