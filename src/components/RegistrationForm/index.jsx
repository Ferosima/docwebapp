import React from "react";
import { useForm } from "react-hook-form";
import { Link, useRouteMatch } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { withNamespaces } from "react-i18next";
import {
  Wrapper, ErrorText, Button, Label, Row, Text, Column,
} from "./style";
import { form_data, form_name } from "./forms";

function RegistrationForm({
  action, error, panding, t,
}) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    action(data);
  };

  const renderInput = ({
    name, label, type, validation,
  }, index) => (
    <Column>
      <Label htmlFor={name}>{t(`auth.registration.${name}`)}</Label>
      <input type={type} {...register(name, validation)} />
      <ErrorText>{errors[name] ? errors[name].message || `${label} is required` : null}</ErrorText>
    </Column>
  );

  return (
    <Wrapper>
      <h1>{t("auth.registration.title")}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>{form_name.map(renderInput)}</Row>
        {form_data.map(renderInput)}
        <Button onClick={!panding && handleSubmit(onSubmit)}>
          {panding ? <ClipLoader color="#fff" loading={panding} size={20} /> : <p>{t("auth.registration.button")}</p>}
        </Button>
      </form>
      {error && <ErrorText>{error}</ErrorText>}
      <Row>
        <Text>{t("auth.registration.link.text")}</Text>
        <Link to="/auth/login">{t("auth.registration.link.link")}</Link>
      </Row>
    </Wrapper>
  );
}
export default withNamespaces()(RegistrationForm);
