import React from 'react';
import { Wrapper, Title, Buttons } from "./style";
import { myButtons } from './buttons';

class Header extends React.Component {
  renderButton = (data, index) => (
    <button type="button">
      <img src={myButtons[data.name].img} alt="myButtons" />
    </button>
  );

  render() {
    const { buttons } = this.props;
    return (
      <Wrapper>
        <Title>
          <h3>Documents</h3>
        </Title>
        <Buttons>
          {buttons.map(this.renderButton)}
        </Buttons>
      </Wrapper>
    );
  }
}

export default Header;
