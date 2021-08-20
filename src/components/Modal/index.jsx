import React from "react";
import {
  Wrapper, Title, Row, Container, Icon,
} from "./style";

const themes = {
  allScreen: {
    justifyContent: "flex-start",
    // height: "-webkit-fill-available",
  },
};

export default function Modal({
  modalVisible, children, onRequestClose, title, theme,
}) {
  return (
    <Wrapper modalVisible={modalVisible} theme={themes[theme]}>
      <Container>
        <Row>
          <Title>{title}</Title>
          <Icon name="close" size="25px" color="#455A64" onClick={onRequestClose} />
        </Row>
        {children}
      </Container>
    </Wrapper>
  );
}
