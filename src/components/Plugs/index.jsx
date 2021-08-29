import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import {
  Wrapper, Text, Icon, Button,
} from "./style";
import assetsData from "../../assets/assetsData";

const theme = {
  constuction: {
    textSize: "22px",
    color: "#455A64",
    fontFamily: "Roboto-Bold",
    paddingText: "0 0 125px",
    paddingIcon: "0 0 20px",
  },
  success: {
    textSize: "22px",
    color: "#263238",
    fontFamily: "Roboto-Bold",
    // paddingText: "",
    paddingIcon: "20px",
  },
};

export function Constuction() {
  return (
    <Wrapper theme={theme.constuction}>
      <Icon name="construct" size="125px" color="#455A64" />
      <Text>This page is under construction</Text>
    </Wrapper>
  );
}

export function Empty({
  image, text, buttonText, onClick,
}) {
  return (
    <Wrapper>
      <Text>{text}</Text>
      <Button image={image} text={buttonText} onClick={onClick} />
    </Wrapper>
  );
}

export function Loading({ panding }) {
  return (
    <Wrapper>
      <ClipLoader color="#477BFF" loading={panding} size={20} />
      <Text>Loading...</Text>
    </Wrapper>
  );
}

export function Success({ text = "Success!", buttonText = "Go back", onClick }) {
  return (
    <Wrapper theme={theme.success}>
      <Icon name="done" size="125px" color="#00B5BD" />
      <Text>{text}</Text>
      <Button
        image={assetsData.images.ArrowRight}
        text={buttonText}
        onClick={onClick}
        isImageRight
      />
    </Wrapper>
  );
}
