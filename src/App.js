import { useEffect } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useDispatch } from "react-redux";
import { setSidebarState } from "./store/actions/app";
import "./App.css";
import Router from "./router";

function App() {
  const dispatch = useDispatch();
  const matches = useMediaQuery("(min-width:700px)");
  useEffect(() => {
    matches && dispatch(setSidebarState(true));
  });
  return <Router />;
}

export default App;
