import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { get, useForm } from "react-hook-form";
import * as yup from "yup";
import moment from "moment";
import SearchSelect from "../SearchSelect";
import FileUpload from "../FileUpload";
import {
  Wrapper, Label, Input, ErrorText, Container,
} from "./style";
import Button from "../Button";

const schema = yup.object().shape({
  name: yup.string().required("Name is required!"),
  description: yup.string(),
  expiredAt: yup
    .date()
    .required()
    .min(
      moment(new Date()).format("YYYY-MM-DDTHH:mm"),
      `Must be later than ${moment(new Date()).format("DD-MM-YYYY HH:mm")}`,
    )
    .default(() => {
      return moment(new Date()).format("YYYY-MM-DDTHH:mm");
    }),
  file: yup
    .mixed()
    .required("A file is required")
    .test("fileFormat", "You must upload the file", (value) => {
      return value.length;
    })
    .test("fileFormat", "PDF only", (value) => {
      return value.length && ["application/pdf"].includes(value[0].type);
    }),
  signerIds: yup
    .array()
    .of(yup.string().required())
    .required("Signatures is required!")
    .min(1, "Must have at least 1 sign"),
});
schema.isValid(new Date());

export default function AddDocForm({ action, error }) {
  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  // const onSubmit = (data) => action(data);
  const onSubmit = (data) => console.log(data);
  console.log("VALUES", getValues());
  console.log(errors);
  return (
    <Wrapper>
      <form>
        <Label htmlFor="name">Name</Label>
        <Input {...register("name")} placeholder="Type file name" />
        <ErrorText>{errors.name?.message}</ErrorText>
        <Label htmlFor="description">Description</Label>
        <Input {...register("description")} placeholder="Type something about this document" />
        <Label htmlFor="expiredAt">Expired at</Label>
        <Input
          {...register("expiredAt")}
          type="datetime-local"
          // value={moment(new Date()).format("YYYY-MM-DDTHH:mm")}
          min={moment(new Date()).format("YYYY-MM-DDTHH:mm")}
        />
        <ErrorText>
          {errors.expiredAt
            && (errors.expiredAt.type === "min" ? errors.expiredAt.message : "Enter date")}
        </ErrorText>
        <FileUpload register={register} getValues={getValues} setValue={setValue} />
        <ErrorText>{errors.file?.message}</ErrorText>
        <SearchSelect register={register} getValues={getValues} setValue={setValue} />
        <ErrorText>{errors.signerIds?.message}</ErrorText>
      </form>
      <Container>
        <Button text="Create" onClick={handleSubmit(onSubmit)} />
      </Container>
    </Wrapper>
  );
}
