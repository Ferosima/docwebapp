import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useRouteMatch } from "react-router-dom";
import * as yup from "yup";
import ClipLoader from "react-spinners/ClipLoader";
import {
  Wrapper, ErrorText, Label, Text, Input, Form, Row,
} from "./style";
import assetsData from "../../assets/assetsData";
import Button from "../Button";

const schema = yup.object().shape({
  email: yup.string().required("Email is a required"),
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
      <Text>Enter the email of the person you want to invite</Text>
      <Form>
        <Label htmlFor="email">Email</Label>
        <Input {...register("email")} placeholder="Type email" />
        {errors.email && <ErrorText>{errors.email?.message}</ErrorText>}
      </Form>
      {error && <ErrorText>{error}</ErrorText>}
      <Row>
        <div />
        <Button
          onClick={handleSubmit(onSubmit)}
          text="Send Invite"
          image={assetsData.images.ArrowRight}
          isImageRight
          pandind={panding}
        />
      </Row>
    </Wrapper>
  );
}
