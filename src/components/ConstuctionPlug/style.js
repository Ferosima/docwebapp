import styled from "styled-components";
import icon from "../Icon";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Text = styled.p`
  color: #455a64;
  font-family: Roboto-Bold;
  font-size: 22px;
  padding-bottom: 150px;
`;
export const Icon = styled(icon)`
  padding: 20px;
`;
