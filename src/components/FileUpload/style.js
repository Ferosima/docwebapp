import styled from "styled-components";
import { Document as doc, Page as page } from "react-pdf";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  border: ${({ theme }) => theme.input.border_input};
  border-radius: 5px;
`;
export const Input = styled.input`
  display: none;
`;
export const Label = styled.label`
  display: flex;
  width: fit-content;
  cursor: pointer;
  margin: ${({ selectedFile }) => (selectedFile ? "5px 0 0" : "15px 0 0")};
`;
export const Text = styled.p`
  font-size: 14px;
  font-family: Roboto-Light;
  color: ${({ theme }) => theme.form.info};
  text-align: center;
  letter-spacing: 0.03em;
  width: -webkit-fill-available;
`;
export const Title = styled.p`
  color: ${({ theme }) => theme.form.label};
  font-size: 14px;
  font-family: Roboto-Medium;
  width: 100%;
  text-align: start;
  padding: 10px 0 10px;
  margin-top: 20px;
`;
export const Preview = styled.object`
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.card.background};
  max-width: 500px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
  border: ${({ theme }) => theme.input.border_input};
  border-radius: 5px;
  overflow-x: hidden;

  .Document {
    border: ${({ theme }) => theme.input.border_input};
    overflow-y: hidden;
  }
  .Page {
  }
`;
