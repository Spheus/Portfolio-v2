import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      text: string;
      contrastText: string;
      body: string;
    };
    isDark: boolean;
  }
}
