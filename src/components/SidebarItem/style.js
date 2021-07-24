import styled from "styled-components";
import { Link } from "react-router-dom";
import icon from "../Icon";

export const Item = styled(Link)`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-content: center;
  align-self: flex-start;
  align-items: center;
  padding: 15px 0;
  color: #939499;
  text-decoration: inherit;
  border-left: ${({ isActive, withoutBorder }) => withoutBorder || (isActive ? "3px solid #3751FF" : "3px solid #D0D0D4")};

  p {
    font-family: Mulish;
    font-size: 16px;
    overflow: hidden;
    width: 60%;
    max-width: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
    -webkit-transition-duration: 1s;
  }
`;
export const Icon = styled(icon)`
  width: 40%;
`;
