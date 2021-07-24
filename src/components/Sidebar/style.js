import styled from "styled-components";
import { Link } from "react-router-dom";
import icon from "../Icon";

export const SidebarWrapper = styled.div`
  -webkit-transition-duration: 1s;
  flex-direction: column;
  display: inline-flex;
  align-items: flex-end;
  justify-content: space-between;
  overflow: hidden;
  width: ${({ isOpen }) => (isOpen ? "250px" : "110px")};
  border: 1px solid #c7c7cc;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: inherit;
  width: 100%;
  padding: ${(props) => props?.padding};
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
export const Arrow = styled(icon)`
  -webkit-transition-duration: 0.5s;
  cursor: pointer;
  padding: 6px;
  transform: ${({ isOpen }) => (isOpen ? "rotate(360deg)" : "rotate(180deg)")};
`;
