import React from "react";
import {
  Wrapper, Title, Row, Container, Icon,
} from "./style";

const themes = {
  allScreen: {
    justifyContent: "flex-start",
    containerPadding: "0",
    rowPadding: " 20px 30px 0",
  },
};

export default function Modal({
  modalVisible, children, onRequestClose, title, theme,
}) {
  return (
    <Wrapper modalVisible={modalVisible} theme={themes[theme]}>
      <Container theme={themes[theme]}>
        <Row theme={themes[theme]}>
          <Title>{title}</Title>
          <Icon name="close" size="25px" color="#455A64" onClick={onRequestClose} />
        </Row>
        {children}
      </Container>
    </Wrapper>
  );
}
