import FlakeHubButton from "@components/FlakeHubButton";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>FlakeHub</span>,
  components: {
    FlakeHubButton: FlakeHubButton,
  },
};

export default config;
