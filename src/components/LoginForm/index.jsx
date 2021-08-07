import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useRouteMatch } from "react-router-dom";
import * as yup from "yup";
import ClipLoader from "react-spinners/ClipLoader";
import {
  Wrapper, ErrorText, Button, Label, Row, Text,
} from "./style";

const schema = yup.object().shape({
  email: yup.string().required("Email is a required"),
  password: yup.string().required("Password is a required"),
});

export default function LoginForm({ action, error, panding }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => action(data);

  return (
    <Wrapper>
      <h1>Wellcome back!</h1>
      <form>
        <Label htmlFor="email">Email</Label>
        <input {...register("email")} />
        <ErrorText>{errors.email?.message}</ErrorText>
        <Label htmlFor="password">Password</Label>
        <input type="password" {...register("password")} />
        <Row>
          <ErrorText>{errors.password?.message}</ErrorText>
          <a onClick={() => console.log("Посилання було натиснуте.")}>Forgot password?</a>
        </Row>
        <Button onClick={!panding ? handleSubmit(onSubmit) : undefined}>
          {panding ? <ClipLoader color="#fff" loading={panding} size={20} /> : <p>Log in</p>}
        </Button>
      </form>
      {error && <ErrorText>{error}</ErrorText>}
      <Row>
        <Text>Not registered yet?</Text>
        <Link to="/auth/registration">Create account</Link>
      </Row>
    </Wrapper>
  );
}
