import React from "react";
import { useForm } from "react-hook-form";
import { Link, useRouteMatch } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import {
  Wrapper, ErrorText, Button, Label, Row, Text, Column, Image,
} from "./style";
import { form_data } from "./forms";
import assetsData from "../../assets/assetsData";

const theme = {
  second: {
    bg: "transparent",
    text: "#939499",
  },
};

export default function OrganizationnForm({
  action, error, panding = false, data,
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
      <Label htmlFor={name}>{label}</Label>
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
      {!data ? <Text>You can create your own organization or wait for an invitation to the organization</Text> : null}
      <Image
        src={data ? assetsData.images.organization : assetsData.images.AddImage}
        alt="Add image"
        // onClick={() => {
        //   console.log("Add image");
        // }}
      />
      <form>
        {form_data.map(renderInput)}
        {action && (
          <Row>
            <CustomButton text="Clear" action={() => reset()} theme={theme.second} />
            <CustomButton text="Create" action={handleSubmit(onSubmit)} />
          </Row>
        )}
      </form>
      {error && <ErrorText>{error}</ErrorText>}
    </Wrapper>
  );
}
