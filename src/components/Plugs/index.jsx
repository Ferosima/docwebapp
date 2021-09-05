import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { withNamespaces } from "react-i18next";
import {
  Wrapper, Text, Icon, Button, Logo,
} from "./style";
import assetsData from "../../assets/assetsData";

export function ConstuctionPlug({ t }) {
  return (
    <Wrapper type="constuction">
      <Icon name="construct" size="125px" />
      <Text>{t(`plug.constuction.text`)}</Text>
    </Wrapper>
  );
}
export const Constuction = withNamespaces()(ConstuctionPlug);

export function Empty({
  image, text, buttonText, onClick,
}) {
  return (
    <Wrapper type="empty">
      <Text>{text}</Text>
      <Button image={image} text={buttonText} onClick={onClick} />
    </Wrapper>
  );
}

export function LoadingPlug({ panding, t }) {
  return (
    <Wrapper>
      <ClipLoader color="#477bff" loading={panding} size={20} />
      <Text>{t(`plug.loading.text`)}</Text>
    </Wrapper>
  );
}
export const Loading = withNamespaces()(LoadingPlug);

export function LazzyLoader() {
  return (
    <Wrapper>
      <Logo src={assetsData.images.Logo} alt="Logo" />
    </Wrapper>
  );
}

function SuccessPlug({
  text = "Success!", buttonText, onClick, t,
}) {
  return (
    <Wrapper type="success">
      <Icon name="done" size="125px" color="#00B5BD" />
      <Text>{text}</Text>
      <Button
        image={assetsData.images.ArrowRight}
        text={buttonText || t(`modal.success.button`)}
        onClick={onClick}
        isImageRight
        style={{ padding: "10px 10px 10px 20px" }}
      />
    </Wrapper>
  );
}
export const Success = withNamespaces()(SuccessPlug);
