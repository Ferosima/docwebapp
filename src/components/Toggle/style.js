import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Button = styled.div`
  cursor: pointer;
  /* border-bottom: ${({ isActive }) => isActive && " 3px solid #477bff;"}}; */
  pointer-events: ${({ isActive }) => isActive && "none"};
  padding: 0 5px;
  padding-bottom: 10px;
  position: relative;
  ::after {
    content: "";
    border: ${({ isActive, theme }) => isActive && `2px solid ${theme.primary_color}`};
    background-color: ${({ theme }) => theme.primary_color};
    border-radius: 20px;
    height: 0px;
    font-size: 0px;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0px;
    box-sizing: border-box;
  }
`;

export const Text = styled.p`
  font-family: Roboto-Medium;
  color: ${({ theme }) => theme.color_text};
  font-size: 16px;
`;
