import styled from "styled-components";
import button from "../../components/Button";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: stretch;
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Text = styled.div`
  font-size: 18px;
  color: #939499;
`;

export const Button = styled(button)`
  margin: 10px 0;
`;
