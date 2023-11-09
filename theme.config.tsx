import Admonition from "@components/Admonition";
import DetSysLogo from "@components/DetSysLogo";
import FlakeHubButton from "@components/FlakeHubButton";
import { FlakeHubPushConfigTable } from "@components/FlakeHubPushConfigTable";
import Rolling from "@components/Rolling";
import { SemVer } from "@components/SemVer";
import { ExampleUrls, UrlStructure } from "@components/UrlStructure";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  banner: {
    text: "Welcome to the new FlakeHub docs experience!",
    key: "flakehub-docs",
    dismissible: true,
  },
  project: {
    link: "https://flakehub.com",
  },
  docsRepositoryBase: "https://github.com/DeterminateSystems/flakehub-docs",
  logoLink: "https://flakehub.com",
  logo: (
    <div className="inline-flex items-center gap-2">
      <span>
        <DetSysLogo />
      </span>
      <span className="font-bold">FlakeHub</span>
    </div>
  ),
  components: {
    Admonition: Admonition,
    ExampleUrls: ExampleUrls,
    FlakeHubButton: FlakeHubButton,
    FlakeHubPushConfigTable: FlakeHubPushConfigTable,
    Rolling: Rolling,
    SemVer: SemVer,
    UrlStructure: UrlStructure,
  },
};

export default config;
