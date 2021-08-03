import React from "react";
import { useForm } from "react-hook-form";
import { schema } from "./schema";
import {
  Header, Icon, Text, Wrapper, Row, Separator, Container, Input,
} from "./style";

export default function Profile({ user }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // action(data);
  };
  const { firstName, secondName, email } = user;
  return (
    <Wrapper>
      <Header>
        <Text>Profile</Text>
      </Header>
      <Icon name="user" color="#263238" size="10em" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Input
            {...schema[schema.findIndex((el) => el.name === "firstName")]}
            disabled // TODO remove disabled for update fields
            error={errors?.firstName}
            defaultValue={firstName}
            register={register}
          />
          <Separator />
          <Input
            {...schema[schema.findIndex((el) => el.name === "secondName")]}
            disabled // TODO remove disabled for update fields
            error={errors?.secondName}
            defaultValue={secondName}
            register={register}
          />
        </Row>
        {schema.slice(2).map((data) => (
          <Input
            {...data}
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