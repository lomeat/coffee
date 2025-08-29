import type { DefaultTheme } from "styled-components/dist/types";

export const theme: Omit<DefaultTheme, "font"> = {
  background: {
    primary: "#000000",
    secondary: "#444",
    accent: "#2E3AC2",
    button: "rgba(64, 40, 36, 0.05)",
  },

  color: {
    primary: "rgba(64, 40, 36, 0.95)",
    secondary: "rgba(64, 40, 36, 0.45)",
    accent: "#2E3AC2",
    button: "#ffffff",
  },
};
