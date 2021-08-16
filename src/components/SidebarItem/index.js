import React from "react";
import { useRouteMatch } from "react-router-dom";
import { Wrapper, Icon, Item } from "./style";

const themes = {
  header: { fontFamily: "Roboto-Medium", fontSize: "18px", margin: "20px 0 0" },
};

export function SidebarItem(props) {
  const {
    path, icon, image, name, isNonActive, theme, ...other
  } = props;
  const isMatch = !isNonActive && useRouteMatch(path);
  return (
    <Item to={path} isActive={isMatch} theme={theme && themes[theme]} {...other}>
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
