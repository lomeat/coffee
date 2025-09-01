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
      primary: string;
      secondary: string;
      accent: string;
      button: string;
      disabled: string;
    };
    font: {
      title: Font;
      heading: Font;
      caption: { large: Font; small: Font };
      text: { large: Font; medium: Font; small: Font };
      desc: Font;
    };
    color: {
      primary: string;
      secondary: string;
      accent: string;
      button: string;
      fail: string;
    };
  }
}
