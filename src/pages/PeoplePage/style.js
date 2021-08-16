import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  justify-items: center;
  grid-gap: 1vw;
  grid-row-gap: 2vw;
`;

export const Container = styled.div`
  flex: 1;
  align-content: baseline;
  padding: 25px;
  overflow-y: scroll;
`;
