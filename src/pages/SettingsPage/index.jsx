import React from "react";
import Header from "../../components/Header";
import { Constuction } from "../../components/Plugs";
import { Wrapper } from "./style";

export default class SettingsPage extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header title="Settings" />
        <Constuction />
      </Wrapper>
    );
  }
}
