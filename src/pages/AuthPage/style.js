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
    padding: 10px 30px 0 20px;
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
    color: ${({ theme }) => theme.primary_text};
  }
`;

export const Rectangle = styled.div`
  flex: ${({ isEmpty }) => (isEmpty ? "0" : "18")};
  background: linear-gradient(157.42deg, #4f76e2 -7.47%, #133187 122.2%);

  @media (max-width: 1024px) {
    flex: 1;
    background: ${({ isEmpty }) => (isEmpty ? "transparent" : "linear-gradient(157.42deg, #4F76E2 -7.47%, #133187 122.2%)")};
  }
`;
