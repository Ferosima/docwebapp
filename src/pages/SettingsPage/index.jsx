import React from "react";
import Toggle from "react-toggle";
import { useSelector, useDispatch } from "react-redux";
import { withNamespaces } from "react-i18next";
import FormHelperText from "@material-ui/core/FormHelperText";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

import Header from "../../components/Header";
import { Constuction } from "../../components/Plugs";
import {
  Wrapper, Container, Item, Title, Subtitle, Select,
} from "./style";
import "react-toggle/style.css";
import i18n from "../../assets/i18";
import { setTheme, setLanguage } from "../../store/actions/app";

function SettingsPage({ t }) {
  const app = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(setTheme(e.target.checked ? "dark" : "light"));
  };

  const changeLanguage = (event) => {
    dispatch(setLanguage(event.target.value));
  };

  return (
    <Wrapper>
      <Header title={t(`sidebar.settings`)} />
      <Container>
        <Item>
          <Container>
            <Title>{t(`settings.theme.title`)}</Title>
            <Subtitle>{t(`settings.theme.subtitle`)}</Subtitle>
          </Container>
          <Toggle defaultChecked={app.theme === "dark"} icons={false} onChange={onChange} />
        </Item>
        <Item>
          <Container>
            <Title>{t(`settings.language.title`)}</Title>
            <Subtitle>{t(`settings.language.subtitle`)}</Subtitle>
          </Container>
          <FormControl variant="outlined">
            <Select defaultValue={app.language} onChange={changeLanguage}>
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="ru">Russian</MenuItem>
              <MenuItem value="ua">Ukrainian</MenuItem>
            </Select>
          </FormControl>
        </Item>
      </Container>
    </Wrapper>
  );
}
export default withNamespaces()(SettingsPage);
