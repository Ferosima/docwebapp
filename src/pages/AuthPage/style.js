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
  flex: 22;
  padding: 40px;
  align-items: center;

  @media (max-width: 680px) {
    padding: 20px;
  }
`;
export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;

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

export const Rectangle = styled.div`
  flex: ${({ isEmpty }) => (isEmpty ? "0" : "11")};
  background: linear-gradient(157.42deg, #5369ff -7.47%, #1732a0 122.2%);

  @media (max-width: 680px) {
    flex: 1;
    background: ${({ isEmpty }) => (isEmpty ? "transparent" : "linear-gradient(157.42deg, #5369ff -7.47%, #1732a0 122.2%)")};
  }
`;
