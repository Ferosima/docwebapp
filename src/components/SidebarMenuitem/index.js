import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Icon from "../Icon";
import "./style.css";

function SidebarLink({
  label, icon, to, activeOnlyWhenExact, className,
}) {
  const match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });
  const isActive = () => (match ? " active" : "");
  return (
    <Link className={`sidebarLink ${isActive()} `} to={to}>
      <Icon name={icon} className="icon" color={match ? "#3751FF" : null} />
      {label}
    </Link>
  );
}

export default SidebarLink;
