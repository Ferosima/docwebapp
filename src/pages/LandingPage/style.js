import styled, { withTheme } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 50px;
  position: relative;
  justify-content: center;

  @media (max-width: 585px) {
    width: 100%;
    padding: 0 30px;
  }
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 0;
  overflow: hidden;
  right: 0;
  left: 0;
  padding: 30px 50px;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  @media (max-width: 585px) {
    padding: 15px 25px;
  } ;
`;
export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  cursor: pointer;

  img {
    width: 32px;
    height: 32px;
    padding: 6px 6px 6px 0;
  }

  p {
    font-family: Roboto-Medium;
    font-size: 17px;
    color: ${({ theme }) => theme.primary_text};
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props?.padding};
  margin: ${(props) => props?.margin};
  /* flex-direction: column-reverse; */
  height: min-content;

  @media (max-width: 585px) {
    flex-direction: ${({ noColumnReverse }) => noColumnReverse || "column-reverse"};
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: ${(props) => props?.width};

  @media (max-width: 585px) {
    width: 100%;
    padding: 0;
  } ;
`;
export const Container = styled.div`
  display: flex;
  padding: ${(props) => props?.padding};
  height: ${(props) => props?.height};
  justify-content: center;
  align-items: center;

  @media (max-width: 585px) {
    width: 100%;
    padding: 0;
  } ;
`;

export const Title = styled.p`
  font-family: Roboto-Medium;
  font-size: 36px;
  padding: ${(props) => props?.padding};

  @media (max-width: 585px) {
    font-size: 24px;
  } ;
`;

export const Subtitle = styled.p`
  font-family: Roboto-Light;
  font-size: 24px;

  @media (max-width: 585px) {
    font-size: 18px;
  } ;
`;

export const ImageWrapper = styled.div`
  width: 40%;
  padding: 0 40px;

  @media (max-width: 585px) {
    width: 65%;
    padding: 20px 0;
  } ;
`;

export const Button = styled.button`
  /* padding: 5px 20px; */
  padding: ${(props) => props.padding || "5px 20px"};
  border-radius: 15px;
  background: ${(props) => (props.primary ? "#477bff" : "transparent")};
  color: ${({ theme, primary }) => (primary ? "white" : theme.primary_text)};
  font-size: 18px;
  white-space: nowrap;
  height: fit-content;

  @media (max-width: 585px) {
    font-size: 16px;
    padding: ${(props) => props.padding || "5px 10px"};
  } ;
`;
