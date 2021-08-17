import { yupResolver } from "@hookform/resolvers/yup";
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { Wrapper, Label, Input, ErrorText } from './style';

const schema = yup.object().shape({
  name: yup.string().required("Name is required!"),
  description: yup.string().required(),
});

export default function AddDocForm({ action, error }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => action(data);
  return (
    <Wrapper>
      <form>
        <Label htmlFor="name">Name</Label>
        <Input {...register("name")} placeholder="Type file name" />
        <ErrorText>{errors.name?.message}</ErrorText>
        <Label htmlFor="description">Description</Label>
        <Input {...register("description")} placeholder="Type something about this document" />
        <ErrorText>{errors.description?.message}</ErrorText>
      </form>
    </Wrapper>
  );
}
