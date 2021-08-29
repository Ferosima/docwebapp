import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow-y: auto;
`;
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 22;
  padding: 30px 50px;
  align-items: center;

  @media (max-width: 680px) {
    /* padding: 20px; */
    padding: 20px 30px 0 20px;
  }
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
    color: #477bff;
  }
`;

export const Rectangle = styled.div`
  flex: ${({ isEmpty }) => (isEmpty ? "0" : "16")};
  background: linear-gradient(157.42deg, #477bff -7.47%, #0c2484 122.2%);

  @media (max-width: 1024px) {
    flex: 1;
    background: ${({ isEmpty }) => (isEmpty ? "transparent" : "linear-gradient(157.42deg,#477BFF -7.47%,#0c2484 122.2%);")};
  }
`;
