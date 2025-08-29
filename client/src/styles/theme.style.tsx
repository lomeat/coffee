import type { DefaultTheme } from "styled-components/dist/types";

export const theme: DefaultTheme = {
  background: {
    primary: "#fffef8",
    secondary: "#f1f5fd",
    accent: "#2E3AC2",
    button: "rgba(64, 40, 36, 0.05)",
  },

  font: {
    title: {
      fontWeight: 500,
      fontFamily: "SF, sans-serif",
      fontSize: "25px",
      lineHeight: "30px",
    },
    heading: {
      fontWeight: 700,
      fontFamily: "SF, sans-serif",
      fontSize: "22px",
      lineHeight: "26px",
    },
    caption: {
      large: {
        fontWeight: 500,
        fontFamily: "SF, sans-serif",
        fontSize: "20px",
        lineHeight: "24px",
      },
      small: {
        fontWeight: 500,
        fontFamily: "SF, sans-serif",
        fontSize: "12px",
        lineHeight: "14px",
      },
    },
    text: {
      large: {
        fontWeight: 500,
        fontFamily: "SF, sans-serif",
        fontSize: "18px",
        lineHeight: "24px",
      },
      medium: {
        fontWeight: 500,
        fontFamily: "SF, sans-serif",
        fontSize: "16px",
        lineHeight: "24px",
      },
      small: {
        fontWeight: 500,
        fontFamily: "SF, sans-serif",
        fontSize: "14px",
        lineHeight: "16px",
      },
    },
  },

  color: {
    primary: "rgba(64, 40, 36, 0.95)",
    secondary: "rgba(64, 40, 36, 0.45)",
    accent: "#2E3AC2",
  },
};
