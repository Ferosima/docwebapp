import styled from "styled-components";
import { Link } from "react-router-dom";
import icon from "../Icon";

export const Item = styled(Link)`
  display: flex;
  flex-direction: row;
  width: calc(100% - 30px);
  justify-content: center;
  align-self: center;
  align-items: center;
  padding: 15px 5px;
  margin: ${({ theme }) => theme.margin || "5px 0"};
  color: ${({ isActive }) => (isActive ? "#F8F9FB" : "#939499")};
  background-color: ${({ isActive }) => (isActive ? "#426EF3" : "transparent")};
  text-decoration: inherit;
  border-radius: 10px;
  font-family: Roboto;
  font-family: ${({ theme }) => theme.fontFamily || "Roboto"};
  font-size: ${({ theme }) => theme.fontSize || "16px"};
  pointer-events: ${({ isActive }) => isActive && "none"};

  :hover {
    background-color: ${({ isActive }) => (isActive ? "#426EF3" : "#E4EBFA")};
    color: ${({ isActive }) => (isActive ? "#F8F9FB" : "#678ABE")};
  }
  p {
    font-size: 16px;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    user-select: none;
  }
`;
export const Icon = styled(icon)`
  height: 20px;
  padding: 0 15px;
`;
