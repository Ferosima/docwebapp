import useMediaQuery from "@material-ui/core/useMediaQuery";
import React, { useEffect, useState } from "react";
import { withNamespaces } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import "./App.css";
import i18n from "./assets/i18";
import { GlobalStyles } from "./components/GlobalStyles";

import Router from "./router";
import { themes } from "./themes";

function App({ t }) {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.app.theme);
  const matches = useMediaQuery("(min-width:700px)");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    // matches && dispatch(setSidebarState(true));
    // dispatch(setTheme("dark"));
    // dispatch(setTheme("light"));
    // changeLanguage("ru");
    // changeLanguage("en");
  });

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}

export default withNamespaces()(App);
