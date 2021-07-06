import React from "react";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import assetsData from "../../assets/assetsData";
import {
  FormWrapper, Logo, Rectangle, Wrapper,
} from "./style";
import LoginForm from "../../components/LoginForm";
import RegistrationForm from "../../components/RegistrationForm";

class AuthPage extends React.Component {
  render() {
    const { path, url } = this.props.match;
    return (
      <Wrapper>
        <FormWrapper>
          <Logo>
            <img src={assetsData.images.Logo} alt="Logo" />
            <p>Docwebapp</p>
          </Logo>
          <Switch>
            <Route exact path={`${url}/login`}>
              <LoginForm />
            </Route>
            <Route path={`${url}/registration`}>
              <RegistrationForm />
            </Route>
          </Switch>
        </FormWrapper>
        <Rectangle />
      </Wrapper>
    );
  }
}

export default withRouter(AuthPage);
