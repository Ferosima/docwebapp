import React from "react";
import { Wrapper } from "./style";
import Header from "../../components/Header";

export default class SettingsPage extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header title="Settings" />
      </Wrapper>
    );
  }
}
