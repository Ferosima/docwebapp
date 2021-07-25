import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  overflow-y: scroll;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 60px 0;
`;
export const Text = styled.p``;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #c7c7cc;
  padding: 30px 20px 15px;

  p${Text} {
    font-family: Roboto-Bold;
    font-size: 18px;
    padding: 0 10px;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #d31818;
  font-size: 18px;
  white-space: nowrap;
  height: fit-content;
`;
