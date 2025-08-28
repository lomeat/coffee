import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";

import { App } from "./app";
import { GlobalStyles } from "./styles/global.style";
import { theme } from "./styles/theme.style";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </StrictMode>
);
