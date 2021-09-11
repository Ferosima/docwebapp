import React from "react";
import { withNamespaces } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { components } from "react-select";
import Header from "../../components/Header";
import { setLanguage, setTheme } from "../../store/actions/app";
import { options } from "./option";
import {
  Container, Item, Option, Select, Subtitle, Title, Wrapper, ItemInfo,
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
  const SingleValue = (props) => (
    <components.SingleValue {...props}>{t(`select.language.${props.getValue()[0].value}`)}</components.SingleValue>
  );

  return (
    <Wrapper>
      <Header title={t(`sidebar.settings`)} />
      <Container>
        <Item>
          <ItemInfo>
            <Title>{t(`settings.theme.title`)}</Title>
            <Subtitle>{t(`settings.theme.subtitle`)}</Subtitle>
          </ItemInfo>
          <Toggle defaultChecked={app.theme === "dark"} icons={false} onChange={onChangeTheme} />
        </Item>
        <Item>
          <ItemInfo>
            <Title>{t(`settings.language.title`)}</Title>
            <Subtitle>{t(`settings.language.subtitle`)}</Subtitle>
          </ItemInfo>
          <Container>
            <Select
              defaultValue={options.find((el) => el.value === app.language)}
              onChange={onChangeLanguage}
              options={options}
              components={{ Option: CustomOption, SingleValue }}
              isSearchable={false}
            />
          </Container>
        </Item>
      </Container>
    </Wrapper>
  );
}
export default withNamespaces()(SettingsPage);
