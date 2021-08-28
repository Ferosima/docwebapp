import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { myButtons } from "./buttons";
import { setSidebarState } from "../../store/actions/app";
import {
  Wrapper, Title, Buttons, Row, Icon,
} from "./style";

export default function Header({ buttons, title }) {
  const sidebarState = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const renderButton = (data, index) => (
    <button type="button" onClick={data.action} key={index}>
      <img src={myButtons[data.name].img} alt="myButtons" />
    </button>
  );
  const handleClick = () => {
    dispatch(setSidebarState(!sidebarState.isSidebarOpen));
  };

  return (
    <Wrapper>
      <Row>
        <Icon name="menu" size="22px" color="#4D5F68" onClick={handleClick} />
        <Title>{title}</Title>
      </Row>
      <Buttons>{buttons && buttons.map(renderButton)}</Buttons>
    </Wrapper>
  );
}
