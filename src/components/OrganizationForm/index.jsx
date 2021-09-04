import React from "react";
import { useForm } from "react-hook-form";
import { withNamespaces } from "react-i18next";
import ClipLoader from "react-spinners/ClipLoader";
import assetsData from "../../assets/assetsData";
import { form_data } from "./forms";
import {
  Button, Column, ErrorText, Image, Label, Row, Text, Wrapper,
} from "./style";

const theme = {
  second: {
    bg: "transparent",
    text: "#939499",
  },
};

function OrganizationnForm({
  action, error, panding = false, data, t,
}) {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    action(data);
  };

  const renderInput = ({
    name, label, type, validation,
  }, index) => (
    <Column key={index}>
      <Label htmlFor={name}>{t(`orgaization.${name}`)}</Label>
      <input type={type} {...register(name, validation)} disabled={data} value={data?.[name]} />
      <ErrorText>{errors[name] ? errors[name].message || `${label} is required` : null}</ErrorText>
    </Column>
  );
  const CustomButton = ({ text, theme, action }) => (
    <Button onClick={!panding ? action : undefined} theme={theme}>
      {panding ? <ClipLoader color="#fff" loading={panding} size={14} /> : <p>{text}</p>}
    </Button>
  );

  return (
    <Wrapper>
      {!data ? <Text>{t("orgaization.subtitle")}</Text> : null}
      <Image
        src={data ? assetsData.images.organization : assetsData.images.AddImage}
        alt="Add image"
      />
      <form>
        {form_data.map(renderInput)}
        {action && (
          <Row>
            <CustomButton text={t("orgaization.buttons.clear")} action={() => reset()} theme={theme.second} />
            <CustomButton text={t("orgaization.buttons.create")} action={handleSubmit(onSubmit)} />
          </Row>
        )}
      </form>
      {error && <ErrorText>{error}</ErrorText>}
    </Wrapper>
  );
}
export default withNamespaces()(OrganizationnForm);
