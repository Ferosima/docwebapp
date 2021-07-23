import React from "react";
import { Title, Wrapper, Text } from "./style";

export default function NoMatch() {
  return (
    <Wrapper>
      <Title>404</Title>
      <Text>Oops, seems like the page doesn&apos;t exist or the link broken</Text>
    </Wrapper>
  );
}
