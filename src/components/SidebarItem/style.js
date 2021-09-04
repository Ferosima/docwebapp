import styled from "styled-components";
import { Link } from "react-router-dom";
import icon from "../Icon";
import { themes } from "../../themes";

export const Item = styled(Link)`
  display: flex;
  flex-direction: row;
  width: calc(100% - 30px);
  justify-content: center;
  align-self: center;
  align-items: center;
  padding: 15px 5px;
  margin: ${({ theme, type }) => theme.sidebar[type].margin};
  color: ${({ active, theme }) => (active ? "#F8F9FB" : theme.color_text_secondary)};
  background-color: ${({ active, theme }) => (active ? theme.primary_color : "transparent")};
  text-decoration: inherit;
  border-radius: 10px;
  font-family: ${({ theme, type }) => theme.sidebar[type].fontFamily || "Roboto"};
  font-size: ${({ theme, type }) => theme.sidebar[type].fontSize || "16px"};
  pointer-events: ${({ active }) => active && "none"};

  :hover {
    background-color: ${({ active, theme }) => (active ? theme.primary_color : theme.sidebar.hover.background)};
    color: ${({ active, theme }) => (active ? theme.color_text_secondary : theme.sidebar.hover.color)};
  }

  @media (max-width: 700px) {
    /* margin: 0; */
  }
`;
export const Icon = styled(icon)`
  height: 20px;
  padding: 0 15px;
`;

export const Text = styled.p`
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  user-select: none;
  font-family: inherit;
`;
