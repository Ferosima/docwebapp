import React from "react";
import { Wrapper } from "./style";
import Header from "../../components/Header";

export default class PeoplePage extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header title="People" />
      </Wrapper>
    );
  }
}
