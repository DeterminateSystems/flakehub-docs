import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
  content: ["./components/**/*.tsx", "./theme/config.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      borderWidth: {
        "5/4": "1.25px",
      },
      colors: {
        dark: "rgb(15, 17, 23)",
        code: "#111b27",
        "ds-dark": "rgb(15, 17, 23)",
        "ds-gold": "#faa61a",
        "ds-magenta": "#cd1e8b",
        "ds-night-sky": "#211d52",
        "ds-ocean-blue": "#086bb5",
        "ds-orange": "#ea741f",
        "ds-red": "#ec2c5b",
        "ds-rich-blue": "#0d4d9c",
        "ds-sky-blue": "#1e9fd9",
        "ds-violet": "#8b2cbf",
        "ds-gray": "#666666",
        "ds-gray-light": "#b3b3b3",
        "ds-gray-lighter": "#e4e4e7",
        "ds-gray-lightest": "#f0f0f0",
        // Brands
        "twitter-blue": "#1da1f2",
        "mastodon-purple": "rgb(86, 58, 204)",
        // Misc
        "rss-orange": "#f99000",
      },
    },
  },
  plugins: [typography],
} satisfies Config;
