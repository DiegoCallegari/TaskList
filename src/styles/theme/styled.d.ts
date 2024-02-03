declare module "styled-components" {
  interface DefaultTheme {
    colors: {
      clean: string;
      secondaryClean: string;
      terciaryClean: string;
      softDark: string;
      dark: string;
      error: string;
      confirm: string;
    };

    fonts: {
      primary: string;
      secondary: string;
    };

    fontSizes: {
      high: string;
      medium: string;
      small: string;
    };
  }
}

export default DefaultThemes;
