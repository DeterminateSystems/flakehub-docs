import DetSysLogo from "@components/DetSysLogo";
import ExampleUrls from "@components/ExampleUrls";
import { FlakeHubPushConfigTable } from "@components/FlakeHubPushConfigTable";
import Rolling from "@components/Rolling";
import { SemVer } from "@components/SemVer";
import UrlFormat from "@components/UrlFormat";
import HoverableButton from "@components/generic/HoverableButton";
import { useRouter } from "next/router";
import { Callout, DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  banner: {
    text: "Welcome to the new FlakeHub docs experience!",
    key: "flakehub-docs",
    dismissible: true,
  },
  chat: {
    link: "https://determinate.systems/discord",
  },
  project: {
    link: "https://github.com/DeterminateSystems/flakehub-docs",
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "FlakeHub docs • %s",
      };
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="FlakeHub documentation" />
      <meta name="description" content="Documentation about FlakeHub" />
      <meta property="og:description" content="Documentation about FlakeHub" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="apple-mobile-web-app-title"
        content="FlakeHub documentation"
      />
      <meta
        property="og:image"
        content="https://flakehub.com/img/detsys-logo.svg"
      />
    </>
  ),
  editLink: {
    text: "Edit this page on GitHub",
  },
  docsRepositoryBase:
    "https://github.com/DeterminateSystems/flakehub-docs/tree/main",
  logoLink: "https://flakehub.com",
  logo: (
    <div className="inline-flex items-center space-x-2">
      <span>
        <DetSysLogo />
      </span>
      <span className="font-bold">FlakeHub</span>
    </div>
  ),
  components: {
    Callout: Callout,
    ExampleUrls: ExampleUrls,
    FlakeHubPushConfigTable: FlakeHubPushConfigTable,
    HoverableButton: HoverableButton,
    Rolling: Rolling,
    SemVer: SemVer,
    UrlFormat: UrlFormat,
  },
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{" "}
        <a href="https://determinate.systems" target="_blank">
          Determinate Systems
        </a>
        , Inc. All rights reserved.
      </span>
    ),
  },
};

export default config;
