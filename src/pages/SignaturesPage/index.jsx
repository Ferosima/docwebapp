import React from "react";
import { Wrapper } from "./style";
import Header from "../../components/Header";
import ConstuctionPlug from "../../components/ConstuctionPlug";

export default class SignaturesPage extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header title="Signatures" />
        <ConstuctionPlug />
      </Wrapper>
    );
  }
}
