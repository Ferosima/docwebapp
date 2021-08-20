import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid #dadce0;
  background-color: #fff;
  border-radius: 3%;
  overflow: hidden;
  justify-content: center;
  width: 210px;
  height: fit-content;
  position: relative;
`;

export const Status = styled.div`
  font-family: Roboto, sans-serif;
  border: 0.5px solid lightgrey;
  border-radius: 15px;
  background-color: rgba(196, 196, 196, 0.76);
  text-align: center;
  font-weight: 200;
  z-index: 5;
  position: absolute;
  margin: 10px;
  padding: 0 5px;
  user-select: none;
`;

export const Preview = styled.div`
  height: 220px;
  width: 100%;
  background-color: #dae0f7;
  justify-content: center;
  display: flex;
  align-items: center;
`;
export const Document = styled.div`
  height: 190px;
  aspect-ratio: 21/29;
  background-color: #fff;
  border-radius: 3%;
`;
export const Container = styled.div`
  justify-content: center;
  display: flex;
  align-items: ${({ theme }) => theme.alignItems || "center"};
  flex-direction: column;
  padding: 10px 10px;
`;

export const Title = styled.div`
  font-size: 16px;
  font-family: ${({ isChosen }) => (isChosen ? "Roboto-Bold" : "Roboto-Medium")};
  padding: 0 0 2px;
`;

export const Subtitle = styled.div`
  font-size: 14px;
  font-family: Roboto;
  color: #455a64;
`;
