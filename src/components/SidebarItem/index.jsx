import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useRouteMatch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSidebarState } from "../../store/actions/app";
import {
  Wrapper, Icon, Item, Text,
} from "./style";

const themes = {
  header: { fontFamily: "Roboto-Medium", fontSize: "18px", margin: "20px 0 0" },
};

export function SidebarItem({
  path, icon, image, name, isNonActive, type, onCloseRequest, ...other
}) {
  const matches = useMediaQuery("(max-width:700px)");
  const sidebarState = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (matches) onCloseRequest();
    // dispatch(setSidebarState(!sidebarState.isSidebarOpen))
  };

  const isMatch = !!(!isNonActive && useRouteMatch(path));

  return (
    <Item to={path} onClick={handleClick} active={isMatch ? 1 : 0} type={type || "default"} {...other}>
      {icon && <Icon {...other} name={icon} color={isMatch ? "#F8F9FB" : null} size="20px" isOutline={!isMatch} />}
      <Text>{name}</Text>
    </Item>
  );
}
