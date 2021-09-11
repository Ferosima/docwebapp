import styled from "styled-components";
import icon from "../Icon";

export const Background = styled.div`
  /* transition: all 1s; */
  overflow: hidden;
  width: fit-content;
  @media (max-width: 700px) {
    overflow: hidden;
    position: absolute;
    z-index: 120;
    /* transition: backdrop-filter 1s; */
    background: rgba(0, 0, 0, 0.5);
    /* backdrop-filter: ${({ isOpen }) => (isOpen ? "blur(6px) opacity(1)" : "blur(6px) opacity(0)")}; */
    height: 100%;
    width: ${({ isOpen }) => (isOpen ? "100%" : "0px")};
  }
`;
export const Wrapper = styled.div`
  transition: all 1s;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  overflow: hidden;
  width: ${({ isOpen }) => (isOpen ? "250px" : "70px")};
  height: 100%;
  /* border-right: ${({ theme }) => theme.border_line}; */

  z-index: 122;
  @media (max-width: 700px) {
    position: absolute;
    height: 100%;
    width: ${({ isOpen }) => (isOpen ? "250px" : "0px")};
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  height: 100%;
  overflow: hidden;
  width: 100%;
  transition: all 1s;
  border-right: ${({ theme }) => theme.border_line};
  background-color: ${({ theme }) => theme.background};
`;

export const Column = styled.div`
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
    color: ${({ theme }) => theme.primary_text};

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
  color: ${({ theme }) => theme.sidebar.arrow};
  transform: ${({ isOpen }) => (isOpen ? "rotate(360deg)" : "rotate(180deg)")};
`;
