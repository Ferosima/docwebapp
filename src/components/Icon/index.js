import React from "react";
import { IconContext } from "react-icons";
import styled from "styled-components";
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
        <Wrapper className={`wrapper ${className}`} onClick={onClick}>
          {icons[name] ? icons[name] : icons.undefined}
        </Wrapper>
      </IconContext.Provider>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;
