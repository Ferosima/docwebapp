import React from "react";
import { useRouteMatch } from "react-router-dom";
import { Icon, Item } from "./style";

export function SidebarItem(props) {
  const {
    path, icon, image, name, withoutBorder, isOpen,
  } = props;
  const isMatch = useRouteMatch(path);
  return (
    <Item to={path} isActive={isMatch} isOpen={isOpen} withoutBorder={withoutBorder}>
      {/* TODO ADD IMAGE  */}
      {icon && <Icon name={icon} color={isMatch ? "#3751FF" : null} size="1em" />}
      <p>{name}</p>
      <div />
    </Item>
  );
}
