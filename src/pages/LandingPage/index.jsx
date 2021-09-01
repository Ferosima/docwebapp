import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import assetsData from "../../assets/assetsData";
import { themes } from "../../themes";
// import "./styles.css";
import {
  Button, Column, Container, Header, ImageWrapper, Logo, Row, Subtitle, Title, Wrapper,
} from "./style";

export default function HomePage() {
  const history = useHistory();
  const theme = useSelector((state) => state.app.theme);

  const handleOnClick = (route) => () => {
    history.push(route);
  };
  return (
    <Wrapper theme={themes[theme]}>
      <Header padding="15px 0" margin="15px 0" noColumnReverse>
        <Logo onClick={handleOnClick("/")}>
          <img src={assetsData.images.Logo} alt="Logo" />
          <p>Docwebapp</p>
        </Logo>
        <Row noColumnReverse>
          <Button onClick={handleOnClick("/auth/login")}>Sign in</Button>
          <Button primary onClick={handleOnClick("/auth/registration")}>
            Sign up
          </Button>
        </Row>
      </Header>
      <Container padding="60px 40px" height="60vh">
        <Row>
          <Column width="40%">
            <Subtitle>Easy and convenient</Subtitle>
            <Title padding="10px 0">Manager of your documents and signatures for your company</Title>
            <Button primary padding="10px 15px" onClick={handleOnClick("/auth/registration")}>
              Get started
            </Button>
          </Column>
          <ImageWrapper>
            <img style={{ width: "100%", height: "100%" }} src={assetsData.images.Doc} alt="Docs" />
          </ImageWrapper>
        </Row>
      </Container>
    </Wrapper>
  );
}
