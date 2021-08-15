import React from "react";
import { Wrapper } from "./style";
import Header from "../../components/Header";

export default class NotificationsPage extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header title="Notifications" />
      </Wrapper>
    );
  }
}
