import styled from "styled-components";

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
`;
export const Title = styled.p`
  font-size: 16px;
  font-family: Roboto;
  color: #747579;
  text-align: center;
`;
