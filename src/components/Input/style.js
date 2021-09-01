import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.p`
  font-family: Roboto-Medium;
  font-size: 15px;
  color: ${({ theme }) => theme.form.label};
  padding: 0 0 10px;
`;
export const Input = styled.input`
  font-family: Roboto-Medium;
  color: ${({ theme }) => theme.color_text};
  outline: none;
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: ${({ theme }) => theme.input.border_input};
  border-radius: 5px;
  padding: 8px 8px;
  font-size: 16px;

  :-webkit-autofill {
    -webkit-box-shadow: ${({ theme }) => `0 0 0px 1000px ${theme.background} inset`};
    -webkit-text-fill-color: ${({ theme }) => theme.color_text};
  }
  :disabled {
    border: 0;
    border-bottom: ${({ theme }) => theme.border_line};
    border-radius: 0;
    background: transparent;
    padding: 8px 0;
  }
`;
export const ErrorText = styled.p`
  font-family: Roboto-Medium;
  font-size: 13px;
  color: ${({ theme }) => theme.color_error};
`;
