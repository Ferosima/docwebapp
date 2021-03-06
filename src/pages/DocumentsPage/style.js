import styled from "styled-components";
import button from "../../components/Button";
import { Toggle as toggle } from "../../components/Toggle";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: stretch;
  justify-content: center;
  overflow: hidden;
`;

export const Grid = styled.div`
  display: grid;
  width: -webkit-fill-available;
  grid-template-columns: repeat(auto-fill, minmax(210px, 210px));
  justify-items: center;
  grid-gap: 1vw;
  grid-row-gap: 2vw;
  padding: 0 25px 25px;
  justify-content: space-between;

  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 4vw;
    grid-row-gap: 3vw;
    justify-content: center;
  }
`;

export const Container = styled.div`
  display: flex;
  flex: 1;

  flex-direction: column;
  overflow-y: auto;
`;

export const Text = styled.div`
  font-size: 18px;
  color: #939499;
`;

export const Button = styled(button)`
  margin: 10px 0;
`;
export const Toggle = styled(toggle)`
  margin: 15px 25px 15px;
`;
