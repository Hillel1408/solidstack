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
      xl: { max: "1700px" },
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
        html: {
          fontSize: "0.6944vw",
        },
        body: {
          minWidth: "375px",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          fontFamily: '"Inter", sans-serif',
          lineHeight: "1",
        },
        "body.lock": {
          overflow: "hidden",
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
        "@media (max-width: 1023px)": {
          html: {
            fontSize: "10px",
          },
        },
        "@media (max-width: 500px)": {
          "._container": {
            padding: "0 15px",
          },
        },
        ".my-blur": {
          backdropFilter: "blur(102.50411987304688px)",
        },
      });
    }),
  ],
};
export default config;
