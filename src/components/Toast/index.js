import React, { useEffect } from "react";
import { withNamespaces } from "react-i18next";
import { Wrapper, Text } from "./style";

function Toast({ message, t }) {
  return (
    <Wrapper>
      <Text>{t(`toast.${message}`)}</Text>
    </Wrapper>
  );
}
export default withNamespaces()(Toast);
