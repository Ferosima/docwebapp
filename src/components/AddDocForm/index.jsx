import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { withNamespaces } from "react-i18next";
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
  expiresAt: yup
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

function AddDocForm({ action, error, t }) {
  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    action(data);
  };

  return (
    <Wrapper>
      <form>
        <Label htmlFor="name">{t("modal.create_doc.name.text")}</Label>
        <Input {...register("name")} placeholder={t("modal.create_doc.name.placeholder")} />
        <ErrorText>{errors.name?.message}</ErrorText>
        <Label htmlFor="description">{t("modal.create_doc.description.text")}</Label>
        <Input {...register("description")} placeholder={t("modal.create_doc.description.placeholder")} />
        <ErrorText>{errors.description?.message}</ErrorText>
        <Label htmlFor="expiredAt">{t("modal.create_doc.expiredAt.text")}</Label>
        <Input {...register("expiresAt")} type="datetime-local" min={moment(new Date()).format("YYYY-MM-DDTHH:mm")} />
        <ErrorText>
          {errors.expiredAt && (errors.expiredAt.type === "min" ? errors.expiredAt.message : "Enter date")}
        </ErrorText>
        <FileUpload register={register} getValues={getValues} setValue={setValue} />
        <ErrorText>{errors.file?.message}</ErrorText>
        <SearchSelect register={register} getValues={getValues} setValue={setValue} />
        <ErrorText>{errors.signerIds?.message}</ErrorText>
      </form>
      <Container>
        <Button text={t("modal.create_doc.button")} onClick={handleSubmit(onSubmit)} />
      </Container>
    </Wrapper>
  );
}

export default withNamespaces()(AddDocForm);
