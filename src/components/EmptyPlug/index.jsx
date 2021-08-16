import React from "react";
import { Wrapper, Text, Button } from "./style";

export default function EmptyPlug({
  image, text, buttonText, onClick,
}) {
  return (
    <Wrapper>
      <Text>{text}</Text>
      <Button image={image} text={buttonText} onClick={onClick} />
    </Wrapper>
  );
}
