import type { AppProps } from 'next/app'
import { useLayoutEffect, useState } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import Header from '../components/Header'
import GlobalStyle from '../styles/global'
import dark from '../styles/themes/dark'
import light from '../styles/themes/light'

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<DefaultTheme>(light);

  const toggleTheme = () => {
    if (theme.title === 'light') {
      setTheme(dark)
      localStorage.setItem('theme', 'dark')
    }
    if (theme.title === 'dark') {
      setTheme(light)
      localStorage.setItem('theme', 'light')
    }
  }

  useLayoutEffect(() => {
    function checkTheme() {
      const typeTheme = localStorage.getItem("theme");
      if (typeTheme != "light") {
        setTheme(dark);
      }
      if (typeTheme != "dark") {
        setTheme(light);
      }
    }
    checkTheme();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
