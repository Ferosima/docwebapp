import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useRouteMatch } from "react-router-dom";
import * as yup from "yup";
import ClipLoader from "react-spinners/ClipLoader";
import { withNamespaces } from "react-i18next";
import {
  Wrapper, ErrorText, Button, Label, Row, Text,
} from "./style";

const schema = yup.object().shape({
  email: yup.string().required("Email is a required"),
  password: yup.string().required("Password is a required"),
});

function LoginForm({
  action, error, panding, t,
}) {
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
      <h1>{t("auth.login.title")}</h1>
      <form>
        <Label htmlFor="email">{t("auth.login.email")}</Label>
        <input {...register("email")} />
        <ErrorText>{errors.email?.message}</ErrorText>
        <Label htmlFor="password">{t("auth.login.password")}</Label>
        <input type="password" {...register("password")} />
        <Row>
          <ErrorText>{errors.password?.message}</ErrorText>
          <a onClick={() => console.log("Посилання було натиснуте.")}>{t("auth.login.forgot")}</a>
        </Row>
        <Button onClick={!panding ? handleSubmit(onSubmit) : undefined}>
          {panding ? <ClipLoader color="#fff" loading={panding} size={20} /> : <p>{t("auth.login.button")}</p>}
        </Button>
      </form>
      {error && <ErrorText>{error}</ErrorText>}
      <Row>
        <Text>{t("auth.login.link.text")}</Text>
        <Link to="/auth/registration">{t("auth.login.link.link")}</Link>
      </Row>
    </Wrapper>
  );
}
export default withNamespaces()(LoginForm);
