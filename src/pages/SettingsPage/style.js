import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  background: ${({ theme }) => theme.background};
  transition: background-color 1s, color 1s;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 60px;
  @media (max-width: 700px) {
    padding: 20px 30px;
  } ;
`;
export const Item = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  ${Container} {
    width: fit-content;
    padding: 0;
  }
`;
export const Title = styled.p`
  color: ${({ theme }) => theme.color_text};
  font-size: 18px;
`;
export const Subtitle = styled.p`
  color: ${({ theme }) => theme.form.info};
  font-size: 16px;
`;
