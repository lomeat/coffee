import "styled-components";

type Font = {
  fontWeight: number;
  fontFamily: string;
  fontSize: string;
  lineHeight: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    background: {
      white: string;
      lightblue: string;
    };
    font: {
      large: {
        medium: Font;
      };
    };
  }
}
