import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.p`
  font-family: Roboto;
  font-size: 18px;
  color: #939499;
`;
export const Input = styled.input`
  font-family: Roboto-Medium;
  outline: none;
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #acb7c5;
  border-radius: 5px;
  padding: 5px 5px;
  font-size: 16px;
`;
export const ErrorText = styled.p`
  font-family: Roboto-Medium;
  font-size: 13px;
  color: #d80404;
`;
