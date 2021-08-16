import React from "react";
import Header from "../../components/Header";
import { Constuction } from "../../components/Plugs";
import { Wrapper } from "./style";

export default class SignaturesPage extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header title="Signatures" />
        <Constuction />
      </Wrapper>
    );
  }
}
