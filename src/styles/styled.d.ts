import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,

    colors: {
      primary:    string;
      secondary:  string;
      tertiary: string;
      background: string;
    },

    fontColor: {
      text: string,
      label: string,
      disabled: string,
    },

    fontSize: {
      small:{
        sm_025: string,
        sm_050: string,
        sm_075: string,
      },
      medium:{  
        md_100: string,
        md_125: string,
        md_150: string,
      },
      large:{
        lg_200: string,
        lg_300: string,
        lg_400: string,
      },
      extra_large:{
        ex_500: string,
        ex_600: string,
        ex_700: string,
      }
    },
    
    boxShadow: {
      bxShadow1: string
      bxShadow2: string
    }

    breakpoints: {
      lg:  string, //large
      md: string,
      sm:  string
    }
  }
}