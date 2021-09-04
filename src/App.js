import useMediaQuery from "@material-ui/core/useMediaQuery";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import "./App.css";
import i18n from "./assets/i18";
import { GlobalStyles } from "./components/GlobalStyles";
import Router from "./router";
import { setSidebarState } from "./store/actions/app";
import { themes } from "./themes";

export default function App() {
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);
  const { language, theme } = app;
  const matches = useMediaQuery("(min-width:700px)");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    if (matches) dispatch(setSidebarState(true));
  }, [matches]);

  useEffect(() => {
    changeLanguage(language);
  }, [language]);

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}
