import styled from "styled-components";
import icon from "../Icon";

export const Container = styled.div`
  /* padding: 20px 30px; */
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  /* max-height: -webkit-fill-available; */

  margin: 50px 0 ;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  /* justify-content: center; */
  align-items: center;
  position: fixed;
  background: rgba(195, 203, 221, 0.28);
  backdrop-filter: blur(6px);
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 100;
  visibility: ${({ modalVisible }) => modalVisible || "hidden"};
  justify-content: ${({ theme }) => theme.justifyContent || "center"};

  ${Container} {
    height: ${({ theme }) => theme.height || "fit-content"};
  }
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

  padding: 20px 30px 0;
`;
