import React from "react";
import { Wrapper, Text } from "./style";
import { colors } from "./colors";

export default function Avatar(props) {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const {
    name, size, textSize, className, style,
  } = props;
  return (
    <Wrapper
      color={colors[getRandomInt(colors.length)]}
      size={size}
      style={style}
      className={className}
    >
      <Text textSize={textSize}>{name[0]}</Text>
    </Wrapper>
  );
}
