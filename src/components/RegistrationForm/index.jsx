import React from "react";
import { useForm } from "react-hook-form";
import { Link, useRouteMatch } from "react-router-dom";
import { Wrapper } from "./style";
import { form_data, form_name } from "./forms";

export default function RegistrationForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const renderInput = ({
    name, label, type, validation,
  }) => (
    <div className="input_wrapper">
      <label htmlFor={name}>{label}</label>
      <input type={type} {...register(name, validation)} />
      <p>{errors[name] ? errors[name].message || `${label} is required` : null}</p>
    </div>
  );

  return (
    <Wrapper>
      <h1>Getting started</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">{form_name.map(renderInput)}</div>
        {form_data.map(renderInput)}
        <input type="submit" value="Sing up" />
      </form>{" "}
      <div className="row">
        <p>Do you have account?</p>
        <Link to="/auth/login">Log in</Link>
      </div>
    </Wrapper>
  );
}
