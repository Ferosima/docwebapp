import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import {
  Wrapper, Button, Text, Header,
} from "./style";
import Icon from "../../components/Icon";
import { logout } from "../../store/actions/auth";
import { getUserState } from "../../store/selectors/user";

class ProfilePage extends React.Component {
  render() {
    const { user, logout } = this.props;
    const { firstName, secondName } = user;
    return (
      <Wrapper>
        <Header>
          <h2>{`${firstName} ${secondName}`}</h2>
          <Button onClick={logout}>
            <Icon name="logout" color="#D31818" size="1em" />
            <Text>Log out</Text>
          </Button>
        </Header>
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

export default compose(withRouter, withConnect)(ProfilePage);
