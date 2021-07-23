import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;
  padding: 0 50px;
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
    font-family: Mulish-SemiBold;
    font-size: 17px;
    color: #3751ff;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props?.padding};
  margin: ${(props) => props?.margin};
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: ${(props) => props?.width};
`;
export const Container = styled.div`
  display: flex;
  padding: ${(props) => props?.padding};
  height: ${(props) => props?.height};
`;

export const Title = styled.p`
  font-family: Mulish-SemiBold;
  font-size: 36px;
  padding: ${(props) => props?.padding};
`;

export const Subtitle = styled.p`
  font-family: Mulish-Light;
  font-size: 24px;
`;

export const ImageWrapper = styled.div`
  width: 40%;
  padding: 0 40px;
`;

export const Button = styled.button`
  /* padding: 5px 20px; */
  padding: ${(props) => props.padding || "5px 20px"};
  border-radius: 15px;
  background: ${(props) => (props.primary ? "#2c5df2" : "transparent")};
  color: ${(props) => (props.primary ? "white" : "#2c5df2")};
  font-size: 18px;
  white-space: nowrap;
  height: fit-content;
`;
