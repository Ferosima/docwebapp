import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useRouteMatch } from "react-router-dom";
import * as yup from "yup";
import { Wrapper, ErrorText } from "./style";

const schema = yup.object().shape({
  email: yup.string().required("Email is a required"),
  password: yup.string().required("Password is a required"),
});

export default function LoginForm({ action, error, panding }) {
  const { path, url } = useRouteMatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => action(data);
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
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <Wrapper>
      <h1>Wellcome back!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <input {...register("email")} />
        <ErrorText>{errors.email?.message}</ErrorText>
        <label htmlFor="password">Password</label>
        <input type="password" {...register("password")} />
        <div className="row">
          <ErrorText>{errors.password?.message}</ErrorText>
          <a onClick={() => console.log("Посилання було натиснуте.")}>Forgot password?</a>
        </div>
        <input type="submit" value="Log in" />
      </form>{" "}
      <ErrorText>{error || null}</ErrorText>
      <div className="row">
        <p>Not registered yet?</p>
        <Link to="/auth/registration">Create account</Link>
      </div>
    </Wrapper>
  );
}
