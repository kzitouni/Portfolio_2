import '../styles/globals.css'
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }) {

  const theme = {
    mobile: `(max-width: 479px)`,
    tablet: `(max-width: 767px)`, 
    laptop: `(max-width: 991px)`,
  };

  return (
  <ThemeProvider theme={theme}>

  <Component {...pageProps} />
  </ThemeProvider>)
}

export default MyApp
