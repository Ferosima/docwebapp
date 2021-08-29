import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.p`
  font-family: Roboto-Medium;
  font-size: 18px;
  color: #939499;
  padding: 0 0 10px;
`;
export const Input = styled.input`
  font-family: Roboto-Medium;
  color: #263238;
  outline: none;
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #c7c7cc;
  border-radius: 5px;
  padding: 8px 8px;
  font-size: 16px;

  :disabled {
    border: 0;
    border-bottom: 1px solid #acb7c5;
    border-radius: 0;
    background: transparent;
    padding: 8px 0;
  }
`;
export const ErrorText = styled.p`
  font-family: Roboto-Medium;
  font-size: 13px;
  color: #d80404;
`;
