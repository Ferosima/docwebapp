import React from "react";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import assetsData from "../../assets/assetsData";
import { FormWrapper, Logo, Rectangle, Wrapper } from "./style";
import LoginForm from "../../components/LoginForm";
import RegistrationForm from "../../components/RegistrationForm";
import { login, authClearError, registration } from "../../store/actions/auth";
import { getAuthState } from "../../store/selectors/auth";

class AuthPage extends React.Component {
  componentDidMount() {
    this.props.authClearError();
  }

  handleOnClick = (route) => () => {
    this.props.history.push(route);
  };

  render() {
    const { login, registration, auth, match } = this.props;
    const { path, url } = match;
    return (
      <Wrapper>
        <Rectangle isEmpty />
        <FormWrapper>
          <Logo onClick={this.handleOnClick("/")}>
            <img src={assetsData.images.Logo} alt="Logo" />
            <p>Docwebapp</p>
          </Logo>
          <Switch>
            <Route exact path={`/auth/login`}>
              <LoginForm action={login} error={auth.error} panding={auth.panding} />
            </Route>
            <Route exact path={`/auth/registration`}>
              <RegistrationForm action={registration} error={auth.error} panding={auth.panding} />
            </Route>
          </Switch>
        </FormWrapper>
        <Rectangle />
      </Wrapper>
    );
  }
}

// export default withRouter(AuthPage);

const mapStateToProps = (state) => ({
  auth: getAuthState(state),
});
const mapDispatchToProps = {
  login,
  registration,
  authClearError,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withConnect)(AuthPage);
