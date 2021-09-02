import React from "react";
import {
  Wrapper, Title, Row, Container, Icon,
} from "./style";

const themes = {
  allScreen: {
    justifyContent: "flex-start",
    containerPadding: "0",
    rowPadding: " 20px 30px 0",
    height: "-webkit-fill-available",
    width: "-webkit-fill-available",
    maxWidth: "510px",
  },
  success: { rowPadding: "5px 0", containerPadding: "10px " },
};

export default function Modal({
  modalVisible, children, onRequestClose, title, type,
}) {
  return (
    <Wrapper modalVisible={modalVisible} type={type}>
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
