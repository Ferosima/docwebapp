import React from "react";
import { useRouteMatch } from "react-router-dom";
import { Wrapper, Icon, Item } from "./style";

const themes = {
  header: { fontFamily: "Roboto-Medium", fontSize: "18px", margin: "20px 0 0" },
};

export function SidebarItem(props) {
  const {
    path,
    icon,
    image,
    name,
    withoutBorder,
    isOpen,
    onClick,
    isNonActive,
    style,
    theme,
    ...other
  } = props;
  const isMatch = !isNonActive && useRouteMatch(path);
  return (
    <Item
      style={style}
      to={path}
      isActive={isMatch}
      isOpen={isOpen}
      withoutBorder={withoutBorder}
      onClick={onClick}
      theme={theme && themes[theme]}
      {...other}
    >
      {icon && (
        <Icon
          isOpen={isOpen}
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
