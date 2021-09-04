import React from "react";
import {
  ErrorText, Input, Label, Wrapper,
} from "./style";

export default function MyInput({
  name,
  label,
  error,
  type,
  register,
  disabled,
  defaultValue,
  validation,
  className,
}) {
  return (
    <Wrapper className={className}>
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={type}
        {...register(name, validation)}
        disabled={disabled}
        defaultValue={defaultValue}
      />
      <ErrorText>{error ? error.message || `${label} is required` : null}</ErrorText>
    </Wrapper>
  );
}
