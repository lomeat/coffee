import type { DefaultTheme } from "styled-components/dist/types";
import { ThemeProvider as Provider } from "styled-components";

import { baseTheme, darkTheme, lightTheme } from "./index";
import { useEffect, useState } from "react";
import { ThemeContext } from "./context";

const defaultTheme = { ...baseTheme, ...lightTheme };

type Props = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: Props) {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    setIsDark(JSON.parse(localStorage.getItem("isDark") || "false"));
  }, []);

  function toggleTheme(): void {
    setIsDark((state) => {
      localStorage.setItem("isDark", JSON.stringify(!state));
      return !state;
    });
  }

  const theme: DefaultTheme = isDark
    ? { ...baseTheme, ...darkTheme }
    : { ...baseTheme, ...lightTheme };

  return (
    <Provider theme={theme || defaultTheme}>
      <ThemeContext.Provider value={toggleTheme}>
        {children}
      </ThemeContext.Provider>
    </Provider>
  );
}
