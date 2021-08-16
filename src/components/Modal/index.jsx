import React from "react";
import {
  Wrapper, Title, Row, Container,
} from "./style";
import Icon from "../Icon";

export default function Modal({ modalVisible, children, onRequestClose }) {
  return (
    <Wrapper modalVisible={modalVisible}>
      <Container>
        <Row>
          <Title>Text</Title>
          <Icon name="close" size="25px" color="#455A64" onClick={onRequestClose} />
        </Row>
        {children}
      </Container>
    </Wrapper>
  );
}
