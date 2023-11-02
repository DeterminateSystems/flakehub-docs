import Hello from "@components/Hello";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>FlakeHub</span>,
  components: {
    Hello: Hello,
  }
};

export default config;
