import styled from "styled-components";

export const Label = styled.p`
  margin: 0;
  padding: 5px 0;
  font-size: 15px;
  font-family: Roboto;
  @media (max-width: 1440px) {
    font-size: 14px;
  }
`;
export const Text = styled.p`
  padding: 5px 5px 15px 0;
  font-family: Roboto;
  font-size: 13px;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.primary_color};
  border-radius: 5px;
  color: white;
  border: none;
  padding: 10px 15px;;
  margin: 5px 10px;
  font-size: 20px;
  font-family: Roboto;

  :active {
    // transition: 0.3s all;
    transform: none;
    opacity: 0.8;
  }
  p {
    padding: 0;
    color: white;
  }
  @media (max-width: 1440px) {
    font-size: 14px;
    padding: 12px;
    border-radius: 7px;
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
  max-width: 500px;
  width: -webkit-fill-available;

  h1 {
    font-family: Roboto-Black;
    font-size: 36px;
    align-self: end;
    margin: 0;
    padding: 0 0 45px 0;
  }
  @media (max-width: 1366px) {
    max-width: 400px;

    h1 {
      padding: 30px 0;
      font-size: 30px;
    }
  }

  @media (max-width: 680px) {
    h1 {
      padding: 30px 0;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    width: -webkit-fill-available;
    margin: 0 -10px;

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
  }
  a {
    padding: 5px 0 5px 0;
    font-family: Roboto-Medium;
    font-size: 13px;
    color: ${({ theme }) => theme.page_auth.color_link};
  }
`;
export const ErrorText = styled.p`
  padding: 5px 0 15px 0;
  font-family: Roboto-Medium;
  font-size: 13px;
  color: ${({ theme }) => theme.page_auth.color_error};
  align-self: self-end;
`;
