import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string,
      primary: string,
      secondary: string,
      util: string,

      darkText: string,
      lightText: string,
    }
  }
}