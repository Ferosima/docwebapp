import React from "react";
import { Wrapper, Text, Button } from "./style";

const ToggleButton = ({ text, action, isActive }) => (
  <Button isActive={isActive} onClick={action}>
    <Text>{text}</Text>
  </Button>
);

export const Toggle = ({
  buttons, active, onClick, className,
}) => {
  const renderButton = ({ text, action }) => (
    <ToggleButton text={text} action={() => onClick(text, action)} isActive={text === active} />
  );

  return <Wrapper className={className}>{buttons.map(renderButton)}</Wrapper>;
};
