import React from "react";
import { useRouteMatch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSidebarState } from "../../store/actions/app";
import { Wrapper, Icon, Item } from "./style";

const themes = {
  header: { fontFamily: "Roboto-Medium", fontSize: "18px", margin: "20px 0 0" },
};

export function SidebarItem({
  path, icon, image, name, isNonActive, theme, ...other
}) {
  const sidebarState = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setSidebarState(!sidebarState.isSidebarOpen));
  };

  const isMatch = !isNonActive && useRouteMatch(path);
  return (
    <Item
      to={path}
      // onClick={handleClick}
      isActive={isMatch}
      theme={theme && themes[theme]}
      {...other}
    >
      {icon && (
        <Icon
          {...other}
          name={icon}
          color={isMatch ? "#F8F9FB" : null}
          size="20px"
          isOutline={!isMatch}
        />
      )}
      <p>{name}</p>
    </Item>
  );
}
