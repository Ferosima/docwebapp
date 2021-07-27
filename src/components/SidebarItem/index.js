import React from "react";
import { useRouteMatch } from "react-router-dom";
import { Wrapper, Icon, Item } from "./style";

export function SidebarItem(props) {
  const {
    path, icon, image, name, withoutBorder, isOpen, ...other
  } = props;
  const isMatch = useRouteMatch(path);
  return (
    <Item to={path} isActive={isMatch} isOpen={isOpen} withoutBorder={withoutBorder}>
      {/* TODO ADD IMAGE  */}
      {icon && (
        <Icon
          isOpen={isOpen}
          name={icon}
          color={isMatch ? "#F8F9FB" : null}
          size={isOpen ? "17px" : "20px"}
          isOutline={!isMatch}
        />
      )}
      <p>{name}</p>
      <div />
    </Item>
  );
}
