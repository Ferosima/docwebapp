import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  font-size: 16px;
  font-family: Roboto;
  background-color: ${({ theme, type }) => theme.button[type]?.background || theme.primary_text};
  border: 1px solid transparent;
  border-color: ${({ theme, type }) => theme.button[type]?.color_border || ""};
  color: ${({ theme, type }) => theme.button[type]?.color || "#fff"};
  padding: 10px 10px;
  border-radius: 10px;
  align-items: center;
  cursor: pointer;
  user-select: none;
  max-width: fit-content;

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
