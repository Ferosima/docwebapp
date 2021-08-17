import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  font-size: 16px;
  font-family: Roboto-Light;
  background-color: ${({ theme }) => theme.background || "#407bff"};
  border: ${({ theme }) => theme.border || ""};
  color: ${({ theme }) => theme.color || "#fff"};
  padding: 10px 10px;
  border-radius: 10px;
  align-items: center;
  cursor: pointer;
  user-select: none;
  img {
    padding: ${({ reverse }) => (reverse ? " 0 0 0 5px" : " 0 5px 0 0")};
    height: 16px;
    width: 16px;
  }

  :active {
    transform: none;
    opacity: 0.8;
  }
`;
