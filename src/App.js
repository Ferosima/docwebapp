import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "./App.css";
import Router from "./router";
import { setSidebarState, setTheme } from "./store/actions/app";
import { themes } from "./themes";
import { GlobalStyles } from "./components/GlobalStyles";

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.app.theme);
  const matches = useMediaQuery("(min-width:700px)");

  useEffect(() => {
    matches && dispatch(setSidebarState(true));
    dispatch(setTheme("dark"));
    // dispatch(setTheme("light"));
  });

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}

export default App;
