import Admonition from "@components/Admonition";
import DetSysLogo from "@components/DetSysLogo";
import FlakeHubButton from "@components/FlakeHubButton";
import { FlakeHubPushConfigTable } from "@components/FlakeHubPushConfigTable";
import Rolling from "@components/Rolling";
import { SemVer } from "@components/SemVer";
import {
  ExampleUrls,
  LabelUrl,
  ReleaseUrl,
  UrlStructure,
} from "@components/UrlStructure";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  banner: {
    text: "Welcome to the new FlakeHub docs experience!",
    key: "flakehub-docs",
    dismissible: true,
  },
  project: {
    link: "https://flakehub.com",
    icon: <DetSysLogo />,
  },
  docsRepositoryBase: "https://github.com/DeterminateSystems/flakehub-docs",
  logoLink: "https://flakehub.com",
  components: {
    Admonition: Admonition,
    ExampleUrls: ExampleUrls,
    FlakeHubButton: FlakeHubButton,
    FlakeHubPushConfigTable: FlakeHubPushConfigTable,
    ReleaseUrl: ReleaseUrl,
    LabelUrl: LabelUrl,
    Rolling: Rolling,
    SemVer: SemVer,
    UrlStructure: UrlStructure,
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
