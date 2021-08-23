import styled from "styled-components";
import { Link } from "react-router-dom";
import icon from "../Icon";

export const SidebarWrapper = styled.div`
  transition: width 1s;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  overflow: hidden;
  width: ${({ isOpen }) => (isOpen ? "250px" : "70px")};
  height: 100%;
  border-right: 1px solid #c7c7cc;
  background: #fff;
  @media (max-width: 700px) {
    height: 100%;
    width: ${({ isOpen }) => (isOpen ? "250px" : "0px")};
  }
`;
export const Wrapper = styled.div`
  width: fit-content;
  @media (max-width: 700px) {
    position: absolute;
    z-index: 120;
    transition: backdrop-filter 1s;
    backdrop-filter: ${({ isOpen }) => (isOpen ? "blur(6px) opacity(1)" : "blur(6px) opacity(0)")};
    height: 100%;
    width: 100%;
    width: ${({ isOpen }) => (isOpen ? "100%" : "0px")};
  }
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
    font-family: Roboto-Medium;
    font-size: 16px;
    color: #426ef3;
    overflow: hidden;
    -webkit-transition-duration: 1s;
    max-width: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  }
`;
export const Arrow = styled(icon)`
  -webkit-transition-duration: 0.5s;
  cursor: pointer;
  padding: 6px;
  width: 20px;
  transform: ${({ isOpen }) => (isOpen ? "rotate(360deg)" : "rotate(180deg)")};
`;
