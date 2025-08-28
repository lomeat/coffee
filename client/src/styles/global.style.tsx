import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'SF';
    src: url('/fonts/SF-Pro-Display-Black.woff2') format('woff2');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'SF';
    src: url('/fonts/SF-Pro-Display-Heavy.woff2') format('woff2');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'SF';
    src: url('/fonts/SF-Pro-Display-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'SF';
    src: url('/fonts/SF-Pro-Display-Semibold.woff2') format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'SF';
    src: url('/fonts/SF-Pro-Display-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'SF';
    src: url('/fonts/SF-Pro-Display-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'SF';
    src: url('/fonts/SF-Pro-Display-Light.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'SF';
    src: url('/fonts/SF-Pro-Display-Ultralight.woff2') format('woff2');
    font-weight: 200;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'SF';
    src: url('/fonts/SF-Pro-Display-Thin.woff2') format('woff2');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
  }

  * {
    font-family: "SF", sans-serif;
    font-weight: 400;
    color: #402824;
    box-sizing: border-box;
  }

  svg {
    display: inline-block;
    vertical-align: middle;
    
    path, circle, rect, line {
      fill: currentColor;
    }
  }

  h1, h2, h3, h4 {
    margin: 0;
    padding: 0;
  }
`;
