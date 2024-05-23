import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      lg: { max: "1440px" },
      md: { max: "768px" },
      sm: { max: "500px" },
    },
    extend: {},
  },
  plugins: [
    plugin(({ addBase }: { addBase: any }) => {
      addBase({
        "*, *:before, *:after": {
          "-webkitTapHighlightColor": "transparent",
        },
        body: {
          minWidth: "375px",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          fontFamily: '"Inter", sans-serif',
          lineHeight: "1",
        },
        main: {
          flex: "1 1 auto",
        },
        "._container": {
          maxWidth: "1870px",
          margin: "0 auto",
          padding: "0 25px",
        },
        "@media (max-width: 1440px)": {
          "._container": {
            padding: "0 20px",
          },
        },
        "@media (max-width: 500px)": {
          "._container": {
            padding: "0 15px",
          },
        },
      });
    }),
  ],
};
export default config;
