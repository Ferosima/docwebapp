import styled from "styled-components";
import { Link, useRouteMatch } from "react-router-dom";
import button from "../Button";

export const Label = styled.p`
  margin: 0;
  padding: 5px 0;
  color: #403e5c;
  font-size: 16px;
  font-family: Roboto-Medium;

  @media (max-width: 1440px) {
    font-size: 14px;
  }
`;
export const Text = styled.p`
  padding: 5px 0 0;
  font-family: Roboto;
  font-size: 14px;
  color: #939499;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
  padding: 30px 0 30px;
`;
export const Input = styled.input`
  outline: none;
  display: block;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid rgba(2, 36, 122, 0.2);
  border-radius: 5px;
  padding: 10px 5px;
  font-size: 14px;
  max-width: 500px;
  width: 500px;

  :focus {
    border: 1px solid #2339c3;
  }
  ::placeholder {
    font-family: Roboto;
    font-size: 16px;
    color: #939499;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  width: -webkit-fill-available;
  /* padding: 0 30px 20px; */
`;
export const ErrorText = styled.p`
  padding: 5px 0 15px 0;
  font-family: Roboto-Medium;
  font-size: 13px;
  color: #d80404;
  align-self: self-end;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
