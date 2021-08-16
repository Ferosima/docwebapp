import styled from "styled-components";
import icon from "../Icon";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  background: rgba(195, 203, 221, 0.28);
  backdrop-filter: blur(6px);
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 999;
  visibility: ${({ modalVisible }) => modalVisible || "hidden"}; ;
`;
export const Title = styled.p`
  color: #263238;
  font-family: Roboto-Medium;
  font-size: 22px;
`;
export const Icon = styled(icon)`
  cursor: pointer;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Container = styled.div`
  padding: 20px 30px;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;
