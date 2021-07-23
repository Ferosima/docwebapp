import React from "react";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import assetsData from "../../assets/assetsData";
import { FormWrapper, Logo, Rectangle, Wrapper } from "./style";
import LoginForm from "../../components/LoginForm";
import RegistrationForm from "../../components/RegistrationForm";
import { login, authClearError } from "../../store/actions/auth";
import { getAuthState } from "../../store/selectors/auth";

class AuthPage extends React.Component {
  componentDidMount() {
    this.props.authClearError();
  }

  render() {
    const { login, auth, match } = this.props;
    const { path, url } = match;
    console.log("MATCH", path, url);
    console.log("AUTH", auth);
    return (
      <Wrapper>
        <Rectangle isEmpty />
        <FormWrapper>
          <Logo>
            <img src={assetsData.images.Logo} alt="Logo" />
            <p>Docwebapp</p>
          </Logo>
          <Switch>
            <Route exact path={`/auth/login`}>
              <LoginForm action={login} error={auth.error} panding={auth.panding} />
            </Route>
            <Route exact path={`/auth/registration`}>
              <RegistrationForm />
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
  authClearError,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withConnect)(AuthPage);
