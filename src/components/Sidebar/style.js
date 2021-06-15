import styled from "styled-components";
import { Link } from "react-router-dom";
import Icon from "../Icon";

export const SidebarWrapper = styled.div`
  -webkit-transition-duration: 1s;
  flex-direction: column;
  display: inline-flex;
  align-items: flex-end;
  overflow: hidden;
  //   flex-shrink:0; to match the width
  width: ${({ isOpen }) => (isOpen ? "250px" : "110px")};
  border: 1px solid #c7c7cc;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 20px 0 0 0;
  overflow: hidden;

  img {
    width: 32px;
    height: 32px;
    padding: 6px;
  }

  p {
    font-family: Mulish-SemiBold;
    font-size: 17px;
    color: #3751ff;
    overflow: hidden;
    -webkit-transition-duration: 1s;
    max-width: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  }
`;
export const Arrow = styled(Icon)`
  -webkit-transition-duration: 0.5s;
  cursor: pointer;
  padding: 6px;
  transform: ${({ isOpen }) => (isOpen ? "rotate(360deg)" : "rotate(180deg)")};
`;

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
  border-left: ${({ isActive }) => (isActive ? "3px solid #3751FF" : "3px solid transparent")};

  p {
    font-family: Mulish;
    font-size: 16px;
    overflow: hidden;
    max-width: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
    padding: ${({ isOpen }) => (isOpen ? "0 23px" : "0px")};
    -webkit-transition-duration: 1s;
  }
`;
