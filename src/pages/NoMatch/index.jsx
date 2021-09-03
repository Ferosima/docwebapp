import React from "react";
import { withNamespaces } from "react-i18next";
import { Title, Wrapper, Text } from "./style";

function NoMatch({ t }) {
  return (
    <Wrapper>
      <Title>404</Title>
      <Text>{t("noMatch")}</Text>
    </Wrapper>
  );
}
export default withNamespaces()(NoMatch);
