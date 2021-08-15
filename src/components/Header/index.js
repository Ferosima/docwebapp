import React from "react";
import { Wrapper, Title, Buttons } from "./style";
import { myButtons } from "./buttons";

class Header extends React.Component {
  renderButton = (data, index) => (
    <button type="button">
      <img src={myButtons[data.name].img} alt="myButtons" />
    </button>
  );

  render() {
    const { buttons, title } = this.props;
    return (
      <Wrapper>
        <Title>{title}</Title>
        <Buttons>{buttons && buttons.map(this.renderButton)}</Buttons>
      </Wrapper>
    );
  }
}

export default Header;
