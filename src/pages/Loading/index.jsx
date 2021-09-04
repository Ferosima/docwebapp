import React from "react";
import { withNamespaces } from "react-i18next";
import "react-toggle/style.css";
import { Logo, Wrapper } from "./style";
import assetsData from "../../assets/assetsData";

export default function Loading() {
  return (
    <Wrapper>
      <Logo src={assetsData.images.Logo} alt="Logo" />
    </Wrapper>
  );
}
