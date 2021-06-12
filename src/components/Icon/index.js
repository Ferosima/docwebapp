import React from "react";
import { IconContext } from "react-icons";
import { icons } from "./icons";

export default class Icon extends React.Component {
  render() {
    const {
      name, color, className, size, style, onClick,
    } = this.props;
    return (
      <IconContext.Provider
        value={{
          color,
          size,
          style,
        }}
      >
        {/* If you wanna add new icon add it to icons.js */}
        <div className={className} onClick={onClick}>
          {icons[name] ? icons[name] : icons.undefined}
        </div>
      </IconContext.Provider>
    );
  }
}
