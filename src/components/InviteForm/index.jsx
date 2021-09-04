import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useRouteMatch } from "react-router-dom";
import * as yup from "yup";
import ClipLoader from "react-spinners/ClipLoader";
import { withNamespaces } from "react-i18next";
import {
  Wrapper, ErrorText, Label, Text, Input, Form, Row,
} from "./style";
import assetsData from "../../assets/assetsData";
import Button from "../Button";

const schema = yup.object().shape({
  email: yup.string().required("Email is a required"),
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
      <Text>{t(`modal.invite.subtitle`)}</Text>
      <Form>
        <Label htmlFor="email">{t(`modal.invite.email`)}</Label>
        <Input {...register("email")} placeholder={t(`modal.invite.placeholder`)} />
        {(error || errors.email) && <ErrorText>{error || errors.email?.message}</ErrorText>}
      </Form>
      <Row>
        <div />
        <Button
          onClick={handleSubmit(onSubmit)}
          text={t(`modal.invite.button`)}
          image={assetsData.images.ArrowRight}
          isImageRight
          panding={panding}
        />
      </Row>
    </Wrapper>
  );
}
export default withNamespaces()(LoginForm);
