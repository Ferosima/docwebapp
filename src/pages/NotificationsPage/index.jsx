import React from "react";
import { withNamespaces } from "react-i18next";
import Header from "../../components/Header";
import { Constuction } from "../../components/Plugs";
import { Wrapper } from "./style";

class NotificationsPage extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <Wrapper>
        <Header title={t("sidebar.notifications")} />
        <Constuction />
      </Wrapper>
    );
  }
}
export default withNamespaces()(NotificationsPage);
