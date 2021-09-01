import styled from "styled-components";
import button from "../Button";
import icon from "../Icon";
import avatar from "../Avatar";

export const Background = styled.div`
  /* width: ${({ isOpen }) => (isOpen ? "fit-content" : "10px")}; */
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  right: 0;
  @media (max-width: 700px) {
    position: absolute;
    z-index: 125;
    transition: width 1s;
    background: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: ${({ isOpen }) => (isOpen ? "100%" : "0px")};
  }
`;

export const Wrapper = styled.div`
  transition: width 1s;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  overflow: hidden;
  width: ${({ isOpen }) => (isOpen ? "350px" : "0px")};
  height: 100%;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.background};
  @media (max-width: 850px) {
    height: 100%;
    width: ${({ isOpen }) => (isOpen ? "270px" : "0px")};
  }
  @media (max-width: 700px) {
    height: 100%;
    width: ${({ isOpen }) => (isOpen ? "300px" : "0")};
  }
`;
export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: 100%;
  border-right: ${({ theme }) => theme.border_line};
  border-left: ${({ theme }) => theme.border_line};
  align-items: center;
  padding: 5px 0;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  overflow: auto;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  overflow: auto;
`;

export const Icon = styled(icon)`
  padding: 10px 5px;
  color: ${({ theme, isMatch }) => (isMatch ? theme.primary_color : theme.preview.tab)};
`;
