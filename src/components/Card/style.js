import styled from "styled-components";
import Item from "@material-ui/core/MenuItem";
import icon from "../Icon";

export const Wrapper = styled.div`
  border: ${({ theme }) => theme.card.border};
  background-color: ${({ theme }) => theme.card.background};
  border-radius: 3%;
  overflow: hidden;
  justify-content: center;
  width: 210px;
  height: fit-content;
  position: relative;
  cursor: pointer;
  .Document {
    border: 1px solid rgba(0, 0, 0, 0.2);
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;
  }
  .Page {
    justify-content: center;
    display: flex;
  }
  @media (max-width: 800px) {
    width: 140px;
  }
  .MuiListItem-root {
  }
  :hover {
    opacity: 0.9;
  }
  /* :active {
    opacity: 0.6;
  } */
`;

export const Status = styled.span`
  font-family: Roboto, sans-serif;
  /* border: 0.5px solid lightgrey; */
  border-radius: 15px;
  background-color: ${({ isReady }) => (isReady ? "#C4F5BC" : "#bdc4ea")};
  color: #272f33;
  text-align: center;
  font-weight: 200;
  z-index: 5;
  position: absolute;
  margin: 10px;
  padding: 0 5px;
  user-select: none;
  @media (max-width: 800px) {
    font-size: 14px;
    margin: 7px;
  }
`;

export const Preview = styled.div`
  height: 220px;
  width: 100%;
  background-color: ${({ theme }) => theme.card.color_preview};
  justify-content: center;
  display: flex;
  justify-content: center;
  align-items: center;
  .Document {
    height: 190px;
    aspect-ratio: 21/29;
    background-color: #fff;
    border-radius: 3%;
  }
  @media (max-width: 800px) {
    height: 170px;
  }
`;
export const DocumentEmpty = styled.div`
  height: 190px;
  aspect-ratio: 21/29;
  background-color: #fff;
  border: 1px solid #bcd1ff;
  border-radius: 3%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 40px;
    user-select: none;
  }

  @media (max-width: 800px) {
    height: 150px;
  }
`;
export const Container = styled.div`
  justify-content: center;
  display: flex;
  align-items: ${({ theme }) => theme.alignItems || "center"};
  flex-direction: column;
  padding: 10px 10px;
`;

export const Row = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Title = styled.div`
  font-size: 16px;
  font-family: ${({ isChosen }) => (isChosen ? "Roboto-Bold" : "Roboto-Medium")};
  padding: 0 0 2px;
  clear: both;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

export const Subtitle = styled.div`
  font-size: 14px;
  font-family: Roboto;
  color: ${({ theme }) => theme.card.color_subtitle};

  @media (max-width: 800px) {
    font-size: 12px;
  }
`;
export const Icon = styled(icon)`
  color: ${({ theme }) => theme.card.color_icon};
`;

export const MenuItem = styled(Item)`
  ${Title} {
    font-size: 16px;
    font-family: Roboto;
    padding: 0 5px 0;
  }
`;
