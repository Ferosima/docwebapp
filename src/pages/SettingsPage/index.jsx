import React from "react";
import { withNamespaces } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import Header from "../../components/Header";
import { setLanguage, setTheme } from "../../store/actions/app";
import { options } from "./option";
import {
  Container, Item, Option, Select, Subtitle, Title, Wrapper,
} from "./style";

function SettingsPage({ t }) {
  const app = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const onChangeTheme = (e) => {
    dispatch(setTheme(e.target.checked ? "dark" : "light"));
  };

  const onChangeLanguage = (data) => {
    dispatch(setLanguage(data.value));
  };

  const CustomOption = ({
    data, innerRef, innerProps, ...other
  }) => {
    return (
      <Option ref={innerRef} {...innerProps}>
        <Title>{t(`select.language.${data.value}`)}</Title>
        <Subtitle>{data.label}</Subtitle>
      </Option>
    );
  };
  const ValueContainer = (props) => <Title {...props}>{t(`select.language.${props.getValue()[0].value}`)}</Title>;

  return (
    <Wrapper>
      <Header title={t(`sidebar.settings`)} />
      <Container>
        <Item>
          <Container>
            <Title>{t(`settings.theme.title`)}</Title>
            <Subtitle>{t(`settings.theme.subtitle`)}</Subtitle>
          </Container>
          <Toggle defaultChecked={app.theme === "dark"} icons={false} onChange={onChangeTheme} />
        </Item>
        <Item>
          <Container>
            <Title>{t(`settings.language.title`)}</Title>
            <Subtitle>{t(`settings.language.subtitle`)}</Subtitle>
          </Container>
          <Select
            defaultValue={options.find((el) => el.value === app.language)}
            onChange={onChangeLanguage}
            options={options}
            components={{ Option: CustomOption, ValueContainer }}
            // styles={SelectStyles}
            isFocused
          />
        </Item>
      </Container>
    </Wrapper>
  );
}
export default withNamespaces()(SettingsPage);
