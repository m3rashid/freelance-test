import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../styles/theme";
import createEmotionCache from "../styles/createEmotionCache";

import { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import darkTheme from "../styles/darkTheme";
import ColorModeContext from "../styles/ColorModeContext";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const [colorTheme, setColorTheme] = useState("light");

  // Set dark mode based on media query
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  useEffect(() => {
    if (window) {
      const preferredTheme = window.localStorage.getItem("theme");
      if (preferredTheme === "dark" || preferredTheme === "light") {
        setColorTheme(preferredTheme);
      } else {
        setColorTheme(prefersDarkMode ? "dark" : "light");
      }
    }
  }, [prefersDarkMode]);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Next.js MUI</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      {/* <ColorModeContext.Provider value={colorMode}> */}
      <ColorModeContext.Provider value={{ colorTheme, setColorTheme }}>
        <ThemeProvider theme={colorTheme === "dark" ? darkTheme : theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
