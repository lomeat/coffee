import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";

import { App } from "./app";
import { GlobalStyles } from "./styles/global.style";
import { ThemeProvider } from "./styles/theme-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </StrictMode>
);
