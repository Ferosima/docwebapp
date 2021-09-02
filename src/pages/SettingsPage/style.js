import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 60px;
`;
export const Item = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
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
