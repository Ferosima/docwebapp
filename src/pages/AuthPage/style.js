import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow: scroll;
`;
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 11;
  padding: 40px;
  align-items: center;
`;
export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
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
  }
`;
export const Rectangle = styled.div`
  flex: 8;
  background: linear-gradient(157.42deg, #5369ff -7.47%, #1732a0 122.2%);
`;
