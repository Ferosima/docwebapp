import styled from "styled-components";

export const Label = styled.p`
  margin: 0;
  padding: 10px 0;
  color: #939499;
  font-size: 16px;
  font-family: Roboto;
`;
export const Text = styled.p`
  padding: 5px 5px 15px 0;
  font-family: Roboto-Medium;
  font-size: 16px;
  color: #939499;
`;

export const Button = styled.div`
  display: flex;
  width: fit-content;
  justify-content: center;
  background: ${({ theme }) => theme.bg || "#426ef3"};
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
      border: 1px solid #acb7c5;
      border-radius: 5px;
      padding: 10px 15px;
      font-size: 16px;
    }

    input:focus {
      border: 1px solid #2339c3;
    }
  }
  a {
    padding: 5px 0 5px 0;
    font-family: Roboto-Medium;
    font-size: 13px;
    color: #2f49fb;
  }
`;
export const ErrorText = styled.p`
  padding: 5px 0 15px 0;
  font-family: Roboto-Medium;
  font-size: 13px;
  color: #d80404;
  align-self: self-end;
`;

export const Image = styled.img`
  width: 140px;
  height: 140px;
  padding: 30px;
  cursor: pointer;
`;
