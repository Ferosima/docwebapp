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
  margin: 5px 0;
  color: #939499;
  color: ${({ isActive }) => (isActive ? "#F8F9FB" : "#939499")};
  background-color: ${({ isActive }) => (isActive ? "#426EF3" : "transparent")};
  text-decoration: inherit;
  border-radius: 10px;

  :hover {
    background-color: ${({ isActive }) => (isActive ? "#426EF3" : "#E4EBFA")};
    color: ${({ isActive }) => (isActive ? "#F8F9FB" : "#678ABE")};
  }
  p {
    font-family: Roboto;
    font-size: 16px;
    overflow: hidden;
    white-space: nowrap;
    width: 60%;
    max-width: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
    -webkit-transition-duration: 1s;
    -webkit-transition-property: max-width;
  }
`;
export const Icon = styled(icon)`
  align-items: center;
  -webkit-transition-duration: 1s;
  transition-duration: 1s;
  height: 20px;
  width: ${({ isOpen }) => (isOpen ? "30%" : "100%")};
`;
