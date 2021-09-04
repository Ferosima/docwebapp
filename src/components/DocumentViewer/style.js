import styled from "styled-components";
import icon from "../Icon";

export const Wrapper = styled.div`
  position: absolute;
  z-index: 122;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;
export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.background};
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
`;
export const Container = styled.div`
  display: inline-flex;
  justify-content: center;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  .Document {
    margin: 20px 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .Page {
    border-radius: 10px;
    box-sizing: border-box;
    position: relative;
    display: flex;
    width: 100%;
    max-width: 800px;
  }
  .react-pdf__Page__svg {
    display: flex;
    background-color: white;
    width: inherit !important;
    height: inherit !important;
  }

  .react-pdf__Page__svg svg {
    width: inherit;
    height: inherit;
  }
`;
export const Title = styled.p`
  color: ${({ theme }) => theme.color_text};
  font-size: 18px;
  font-family: Roboto-Medium;
  width: 100%;
  text-align: center;
  padding: 15px 0;
`;
export const Text = styled.p`
  color: #c9cfd1;
  font-size: 14px;
  font-family: Roboto;
  width: 100%;
  text-align: center;
  padding: 10px 0;
`;
export const Icon = styled(icon)`
  color: ${({ theme }) => theme.card.color_icon};
  :active {
    opacity: 0.6;
  }
`;
