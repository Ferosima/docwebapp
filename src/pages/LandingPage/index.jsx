import React from "react";
import { withRouter } from "react-router";
import assetsData from "../../assets/assetsData";
// import "./styles.css";
import {
  Logo,
  Row,
  Wrapper,
  Button,
  Column,
  Subtitle,
  Title,
  ImageWrapper,
  Container,
} from "./style";

class HomePage extends React.Component {
  handleOnClick = (route) => () => {
    this.props.history.push(route);
  };

  render() {
    return (
      <Wrapper>
        <Row padding="15px 0" margin="15px 0">
          <Logo onClick={this.handleOnClick("/")}>
            <img src={assetsData.images.Logo} alt="Logo" />
            <p>Docwebapp</p>
          </Logo>
          <Row>
            <Button onClick={this.handleOnClick("/auth/login")}>Sing in</Button>
            <Button primary onClick={this.handleOnClick("/auth/registration")}>
              Sign up
            </Button>
          </Row>
        </Row>
        <Container padding="60px 40px" height="70vh">
          <Row>
            <Column width="40%">
              <Subtitle>Easy and convenient</Subtitle>
              <Title padding="10px 0">
                Manager of your documents and signatures for your company
              </Title>
              <Button
                primary
                padding="10px 15px"
                onClick={this.handleOnClick("/auth/registration")}
              >
                Get started
              </Button>
            </Column>
            <ImageWrapper>
              <img
                style={{ width: "100%", height: "100%" }}
                src={assetsData.images.Doc}
                alt="Docs"
              />
            </ImageWrapper>
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default withRouter(HomePage);
