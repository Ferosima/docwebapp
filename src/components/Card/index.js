import React from 'react';
import { Wrapper, CardNested, Status, TextBox, TitleName, Data } from './style';

class Card extends React.Component {
  render() {
    const { name, createdAt } = this.props.data;
    return (
      <Wrapper>
        <CardNested />
        <Status>ready</Status>
        <TextBox />
        <TitleName>{name}</TitleName>
        <Data>{createdAt}</Data>
      </Wrapper>
    );
  }
}

export default Card;
