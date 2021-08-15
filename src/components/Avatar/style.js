import styled from "styled-components";

export const Wrapper = styled.div`
  width: ${({ size }) => size || "35px"};
  aspect-ratio: 1;
  background-color: ${({ color }) => color};
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 50%;
`;
export const Text = styled.p`
  color: #fff;
  font-family: Roboto-Medium;
  font-size: ${({ textSize }) => textSize || "22px"};
`;
