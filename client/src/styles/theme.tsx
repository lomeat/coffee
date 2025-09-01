import type { DefaultTheme } from "styled-components/dist/types";

export const theme: Pick<DefaultTheme, "font"> = {
  font: {
    title: {
      fontWeight: 500,
      fontFamily: "SF Pro Display, sans-serif",
      fontSize: "25px",
      lineHeight: "30px",
    },
    heading: {
      fontWeight: 700,
      fontFamily: "SF Pro Display, sans-serif",
      fontSize: "22px",
      lineHeight: "26px",
    },
    caption: {
      large: {
        fontWeight: 500,
        fontFamily: "SF Pro Display, sans-serif",
        fontSize: "20px",
        lineHeight: "24px",
      },
      small: {
        fontWeight: 500,
        fontFamily: "SF Pro Display, sans-serif",
        fontSize: "12px",
        lineHeight: "14px",
      },
    },
    text: {
      large: {
        fontWeight: 500,
        fontFamily: "SF Pro Display, sans-serif",
        fontSize: "18px",
        lineHeight: "24px",
      },
      medium: {
        fontWeight: 500,
        fontFamily: "SF Pro Display, sans-serif",
        fontSize: "16px",
        lineHeight: "24px",
      },
      small: {
        fontWeight: 500,
        fontFamily: "SF Pro Display, sans-serif",
        fontSize: "14px",
        lineHeight: "16px",
      },
    },
    desc: {
      fontWeight: 400,
      fontFamily: "SF Pro Display, sans-serif",
      fontSize: "14px",
      lineHeight: "16px",
    },
  },
};
