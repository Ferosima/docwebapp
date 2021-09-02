import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { withNamespaces } from "react-i18next";
import {
  Wrapper, Button, Text, Row, Container,
} from "./style";
import Icon from "../../components/Icon";
import { logout } from "../../store/actions/auth";
import { getUserState } from "../../store/selectors/user";
import Profile from "../../components/Profile";
import Avatar from "../../components/Avatar";
import Header from "../../components/Header";

class ProfilePage extends React.Component {
  render() {
    const { user, logout, t } = this.props;
    const { firstName, secondName } = user;
    return (
      <Wrapper>
        <Header title={`${firstName} ${secondName}`} />
        <Container>
          <Profile user={user} />
        </Container>
      </Wrapper>
    );
  }
}
const mapStateToProps = (state) => ({
  user: getUserState(state),
});
const mapDispatchToProps = {
  logout,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withNamespaces()(compose(withRouter, withConnect)(ProfilePage));
