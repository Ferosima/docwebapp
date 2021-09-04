import React from "react";
import { useForm } from "react-hook-form";
import { withNamespaces } from "react-i18next";
import Avatar from "../Avatar";
import { schema } from "./schema";
import {
  Input, Row, Separator, Wrapper,
} from "./style";

function Profile({ user, t }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    // action(data);
  };
  const { firstName, secondName, avatarColor } = user;
  return (
    <Wrapper>
      <Avatar name={firstName} color={avatarColor} size="8em" textSize="60px" style={{ margin: "25px" }} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Input
            {...schema[schema.findIndex((el) => el.name === "firstName")]}
            label={t("profile.firstName")}
            disabled // TODO remove disabled for update fields
            error={errors?.firstName}
            defaultValue={firstName}
            register={register}
          />
          <Separator />
          <Input
            {...schema[schema.findIndex((el) => el.name === "secondName")]}
            label={t("profile.secondName")}
            disabled // TODO remove disabled for update fields
            error={errors?.secondName}
            defaultValue={secondName}
            register={register}
          />
        </Row>
        {schema.slice(2).map((data, index) => (
          <Input
            {...data}
            key={index}
            label={t(`profile.${data.name}`)}
            disabled // TODO remove disabled for update fields
            error={errors[data.name]}
            defaultValue={user[data.name]}
            register={register}
          />
        ))}
      </form>
    </Wrapper>
  );
}
export default withNamespaces()(Profile);
