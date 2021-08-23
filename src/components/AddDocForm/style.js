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
    ::-webkit-scrollbar {
      width: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      border: 1px solid #afb6c8;
      border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #dee5f0;
      border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #9da9b9;
    }
  }
`;

export const Label = styled.p`
  margin-top: 20px;
  margin-bottom: 0;
  padding: 5px 0;
  color: #403e5c;
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
  border: 1px solid rgba(2, 36, 122, 0.2);
  border-radius: 5px;
  padding: 10px 5px;
  font-size: 14px;
  max-width: 500px;
  width: 100%;
  font-size: 14px;
  font-family: Roboto-Medium;
  color: #4d545b;

  :focus {
    border: 1px solid #2339c3;
  }
  ::placeholder {
    font-family: Roboto;
    font-size: 16px;
    color: #939499;
  }
  ::-webkit-datetime-edit {
    font-size: 14px;
    font-family: Roboto-Medium;
  }
  ::-webkit-calendar-picker-indicator {
    color: #4d545b;
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
