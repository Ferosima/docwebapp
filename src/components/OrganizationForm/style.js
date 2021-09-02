import styled from "styled-components";

export const Label = styled.p`
  margin: 0;
  padding: 10px 0;
  color: ${({ theme }) => theme.form.label};
  font-size: 16px;
  font-family: Roboto;
`;
export const Text = styled.p`
  padding: 5px 5px 15px 0;
  font-family: Roboto-Medium;
  font-size: 16px;
  color: ${({ theme }) => theme.form.info};
`;

export const Button = styled.div`
  display: flex;
  width: fit-content;
  justify-content: center;
  background: ${({ theme }) => theme.primary_color};
  border-radius: 10px;
  border: none;
  padding: 8px 15px;
  margin: 5px 10px;
  font-size: 20px;
  font-family: Roboto-Medium;
  cursor: pointer;
  user-select: none;

  :active {
    // transition: 0.3s all;
    transform: none;
    opacity: 0.8;
  }
  p {
    font-size: 14px;
    padding: 0;
    color: ${({ theme }) => theme.text || "white"};
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  align-items: baseline;
`;
export const Column = styled.div`
  display: flex;
  flex: 1;
  margin: 0 10px;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 30px 40px;
  width: -webkit-fill-available;

  h1 {
    font-family: Roboto-Black;
    font-size: 48px;
    align-self: end;
    color: #263238;
    margin: 0;
    padding: 0 0 60px 0;
  }

  @media (max-width: 680px) {
    h1 {
      padding: 30px 0;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-self: center;
    width: -webkit-fill-available;
    max-width: 400px;

    div${Row} {
      align-self: inherit;
      justify-content: space-between;
    }

    input {
      outline: none;
      display: block;
      box-sizing: border-box;
      width: 100%;
      border-radius: 4px;
      border: ${({ theme }) => theme.input.border_input};
      border-radius: 5px;
      padding: 15px 15px;
      font-size: 16px;
      background: transparent;
      color: ${({ theme }) => theme.color_text};
    }

    input:focus {
      border: ${({ theme }) => theme.input.border_input_focus};
    }
    input:-webkit-autofill {
      -webkit-box-shadow: ${({ theme }) => `0 0 0px 1000px ${theme.background} inset`};
      -webkit-text-fill-color: ${({ theme }) => theme.color_text};
    }
    input:disabled {
      border: 0;
      border-bottom: ${({ theme }) => theme.border_line};
      border-radius: 0;
      background: transparent;
      padding: 10px 0px;
    }
  }
`;
export const ErrorText = styled.p`
  padding: 5px 0 15px 0;
  font-family: Roboto-Medium;
  font-size: 13px;
  color: ${({ theme }) => theme.color_error};
  align-self: self-end;
`;

export const Image = styled.img`
  width: 140px;
  height: 140px;
  padding: 30px;
  cursor: pointer;
`;
