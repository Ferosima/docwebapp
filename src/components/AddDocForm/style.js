import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  /* max-height: 80vh; */
  height: fit-content;
  align-items: flex-end;

  form {
    max-height: 80vh;
    overflow-x: hidden;
    padding: 0 22px 0 30px;
    overflow-y: auto;
    align-items: flex-start;
    justify-content: center;
    width: -webkit-fill-available;
  }
`;

export const Label = styled.p`
  margin-top: 20px;
  margin-bottom: 0;
  padding: 5px 0;
  color: ${({ theme }) => theme.form.label};
  font-size: 16px;
  font-family: Roboto-Medium;

  @media (max-width: 1440px) {
    font-size: 14px;
  }
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
  padding: 10px 0 10px;
`;

export const Input = styled.input`
  outline: none;
  display: block;
  box-sizing: border-box;
  border-radius: 4px;
  border: ${({ theme }) => theme.input.border_input};
  border-radius: 5px;
  padding: 10px 5px;
  font-size: 14px;
  max-width: 500px;
  width: 100%;
  font-size: 14px;
  font-family: Roboto-Medium;
  background: transparent;
  color: ${({ theme }) => theme.color_text};

  :focus {
    border: ${({ theme }) => theme.input.border_input_focus};
  }
  :-webkit-autofill {
    -webkit-box-shadow: ${({ theme }) => `0 0 0px 1000px ${theme.background} inset`};
    -webkit-text-fill-color: ${({ theme }) => theme.color_text};
  }
  ::placeholder {
    font-family: Roboto;
    font-size: 16px;
    color: ${({ theme }) => theme.color_text_secondary};
  }
  :-webkit-datetime-edit {
    font-size: 14px;
    font-family: Roboto-Medium;
    color: ${({ theme }) => theme.color_text};
  }
  ::-webkit-calendar-picker-indicator {
    filter: ${({ theme }) => theme.form.filter};
  }
  margin-bottom: 10px;
`;

export const ErrorText = styled.p`
  padding: 0;
  font-family: Roboto-Medium;
  font-size: 13px;
  color: #d80404;
  align-self: self-end;
  max-width: 500px;
`;

export const Container = styled.div`
  padding: 10px 30px;
`;
