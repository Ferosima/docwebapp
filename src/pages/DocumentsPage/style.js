import styled from "styled-components";
import button from "../../components/Button";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: stretch;
  justify-content: center;
  overflow-y: hidden;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  justify-items: center;
  grid-gap: 1vw;
  grid-row-gap: 2vw;

  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    grid-gap: 2vw;
    grid-row-gap: 3vw;
  }
`;

export const Container = styled.div`
  flex: 1;
  padding: 25px;
  overflow-y: scroll;
`;

export const Text = styled.div`
  font-size: 18px;
  color: #939499;
`;

export const Button = styled(button)`
  margin: 10px 0;
`;
