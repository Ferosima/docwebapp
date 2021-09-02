import React from "react";
import Toggle from "react-toggle";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/Header";
import { Constuction } from "../../components/Plugs";
import {
  Wrapper, Container, Item, Title, Subtitle,
} from "./style";
import "react-toggle/style.css";
import { setTheme } from "../../store/actions/app";

export default function SettingsPage() {
  const theme = useSelector((state) => state.app.theme);
  const dispatch = useDispatch();

  const onChange = (e) => {
    console.log("HI", e.target.checked);
    dispatch(setTheme(e.target.checked ? "dark" : "light"));
  };

  return (
    <Wrapper>
      <Header title="Settings" />
      <Container>
        <Item>
          <Container>
            <Title>Dark Theme</Title>
            <Subtitle>Use dark theme as main</Subtitle>
          </Container>
          <Toggle defaultChecked={theme === "dark"} icons={false} onChange={onChange} />
        </Item>
      </Container>
    </Wrapper>
  );
}
