import React from "react";
import { useForm } from "react-hook-form";
import { Link, useRouteMatch } from "react-router-dom";
import {
  Wrapper, Label, Input, ErrorText,
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
