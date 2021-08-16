import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import {
  Wrapper, Text, Icon, Button,
} from "./style";

const theme = {
  constuction: {
    textSize: "22px",
    color: "#455A64",
    fontFamily: "Roboto-Bold",
    paddingText: "0 0 125px",
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
      <ClipLoader color="#407bff" loading={panding} size={20} />
      <Text>Loading...</Text>
    </Wrapper>
  );
}
