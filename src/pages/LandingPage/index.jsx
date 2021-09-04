import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { withNamespaces } from "react-i18next";
import assetsData from "../../assets/assetsData";

// import "./styles.css";
import {
  Button, Column, Container, Header, ImageWrapper, Logo, Row, Subtitle, Title, Wrapper,
} from "./style";

function HomePage({ t }) {
  const history = useHistory();
  const theme = useSelector((state) => state.app.theme);

  const handleOnClick = (route) => () => {
    history.push(route);
  };
  return (
    <Wrapper>
      <Header padding="15px 0" margin="15px 0" noColumnReverse>
        <Logo onClick={handleOnClick("/")}>
          <img src={assetsData.images.Logo} alt="Logo" />
          <p>Docwebapp</p>
        </Logo>
        <Row noColumnReverse>
          <Button onClick={handleOnClick("/auth/login")}>{t("landing.header.signin")}</Button>
          <Button primary onClick={handleOnClick("/auth/registration")}>
            {t("landing.header.signup")}
          </Button>
        </Row>
      </Header>
      <Container padding="60px 40px" height="60vh">
        <Row>
          <Column width="40%">
            <Subtitle>{t("landing.home.subtitle")}</Subtitle>
            <Title padding="10px 0">{t("landing.home.title")}</Title>
            <Button primary padding="10px 15px" onClick={handleOnClick("/auth/registration")}>
              {t("landing.home.button")}
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
export default withNamespaces()(HomePage);
