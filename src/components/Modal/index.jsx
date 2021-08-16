import React from "react";
import {
  Wrapper, Title, Row, Container, Icon,
} from "./style";

export default function Modal({
  modalVisible, children, onRequestClose, title,
}) {
  return (
    <Wrapper modalVisible={modalVisible}>
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
