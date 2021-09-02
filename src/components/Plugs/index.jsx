import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import {
  Wrapper, Text, Icon, Button,
} from "./style";
import assetsData from "../../assets/assetsData";

export function Constuction() {
  return (
    <Wrapper type="constuction">
      <Icon name="construct" size="125px" />
      <Text>This page is under construction</Text>
    </Wrapper>
  );
}

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

export function Loading({ panding }) {
  return (
    <Wrapper>
      <ClipLoader color="#477bff" loading={panding} size={20} />
      <Text>Loading...</Text>
    </Wrapper>
  );
}

export function Success({ text = "Success!", buttonText = "Go back", onClick }) {
  return (
    <Wrapper type="success">
      <Icon name="done" size="125px" color="#00B5BD" />
      <Text>{text}</Text>
      <Button
        image={assetsData.images.ArrowRight}
        text={buttonText}
        onClick={onClick}
        isImageRight
        style={{ padding: "10px 10px 10px 20px" }}
      />
    </Wrapper>
  );
}
