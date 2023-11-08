import Admonition from "@components/Admonition";
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
    <div className="flex items-center">
      <div>
        <svg
          className="h-6 w-auto"
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserver"
          enableBackground="new 0 0 5000 4330.17"
          viewBox="0 0 5000 4330.17"
        >
          <linearGradient
            id="a"
            x1="4735.838"
            x2="2764.106"
            y1="457.542"
            y2="2429.274"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".114" stopColor="#f8a51c"></stop>
            <stop offset=".207" stopColor="#f68e28"></stop>
            <stop offset=".397" stopColor="#f2643e"></stop>
            <stop offset=".569" stopColor="#ef454e"></stop>
            <stop offset=".715" stopColor="#ed3358"></stop>
            <stop offset=".818" stopColor="#ec2c5b"></stop>
          </linearGradient>
          <path
            d="M5000 2165.11V721.7L3749.97 0 2499.94 721.7v1443.41l1250.03 721.71z"
            fill="url(#a)"
          ></path>
          <linearGradient
            id="b"
            x1="2338.944"
            x2="161.112"
            y1="1973.054"
            y2="3800.472"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".078" stopColor="#0d4d9c"></stop>
            <stop offset=".258" stopColor="#1162ac" stopOpacity=".7735"></stop>
            <stop offset=".628" stopColor="#1c98d4" stopOpacity=".3078"></stop>
            <stop offset=".675" stopColor="#1e9fd9" stopOpacity=".2483"></stop>
            <stop offset=".903" stopColor="#28aae1" stopOpacity=".1"></stop>
          </linearGradient>
          <path
            d="M2500.06 3608.47V2165.06l-1250.03-721.7L0 2165.06v1443.41l1250.03 721.7z"
            fill="url(#b)"
          ></path>
          <linearGradient
            id="c"
            x1="3485.914"
            x2="1514.182"
            y1="1179.178"
            y2="3150.91"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".119" stopColor="#cd1e8b" stopOpacity=".9"></stop>
            <stop offset=".223" stopColor="#b52790" stopOpacity=".8852"></stop>
            <stop offset=".445" stopColor="#783e9c" stopOpacity=".8539"></stop>
            <stop offset=".762" stopColor="#1762af" stopOpacity=".8091"></stop>
            <stop offset=".826" stopColor="#036ab3" stopOpacity=".8"></stop>
          </linearGradient>
          <path
            d="M3750.08 2886.75V1443.34l-1250.03-721.7-1250.03 721.7v1443.41l1250.03 721.7z"
            fill="url(#c)"
          ></path>
        </svg>
      </div>
      <div>
        <span className="text-lg font-medium">FlakeHub</span>
      </div>
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
