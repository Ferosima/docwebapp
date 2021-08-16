import React from "react";
import Header from "../../components/Header";
import { Constuction } from "../../components/Plugs";
import { Wrapper } from "./style";

export default class NotificationsPage extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header title="Notifications" />
        <Constuction />
      </Wrapper>
    );
  }
}
