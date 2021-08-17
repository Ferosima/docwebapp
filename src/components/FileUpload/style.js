import styled from "styled-components";
import { Document as doc, Page as page } from "react-pdf";

export const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .Document {
    /* aspect-ratio: 21/29;
    width: 200px; */
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
`;
export const Input = styled.input`
  display: none;
`;
export const Label = styled.label`
  display: flex;
  width: fit-content;
  cursor: pointer;
  margin: 15px 0 0;
`;
export const Text = styled.p`
  font-size: 14px;
  font-family: Roboto-Light;
  color: #939499;
  text-align: center;
  letter-spacing: 0.03em;
  width: -webkit-fill-available;
`;
export const Title = styled.p`
  color: #403e5c;
  font-size: 16px;
  font-family: Roboto-Medium;
`;
export const Preview = styled.object`
  padding: 5px 10px;
  background-color: #f9fbff;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  overflow-x: hidden;
`;
