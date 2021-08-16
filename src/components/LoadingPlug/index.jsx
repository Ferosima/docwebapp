import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Wrapper, Text, Button } from "./style";

export default function EmptyPlug({ panding }) {
  return (
    <Wrapper>
      <ClipLoader color="#407bff" loading={panding} size={20} />
      <Text>Loading...</Text>
    </Wrapper>
  );
}
