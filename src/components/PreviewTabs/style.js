import styled from "styled-components";
import button from "../Button";
import icon from "../Icon";
import avatar from "../Avatar";

export const Background = styled.div`
  width: fit-content;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  right: 0;
  @media (max-width: 700px) {
    position: absolute;
    z-index: 125;
    transition: width 1s;
    background: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: ${({ isOpen }) => (isOpen ? "100%" : "0px")};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  padding: 10px 0;
  box-sizing: border-box;
  justify-content: space-between;
`;
export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: 100%;
  border-right: 1px solid #c7c7cc;
  align-items: center;
  padding: 5px 0;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  overflow-x: hidden;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  overflow: auto;
  justify-content: space-evenly;
  width: 100%;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex: 1;
  height: 100%;
  background: ${({ theme }) => theme.background};
  box-sizing: border-box;
  overflow: hidden;

  .MuiTimelineItem-missingOppositeContent:before {
    padding: 0;
    flex: 0;
  }
  .MuiTimeline-root {
    width: inherit;
    overflow-x: hidden;
  }
  .MuiTimelineContent-root {
    overflow: hidden;
  }
  .MuiTimelineConnector-root {
    background-color: ${({ theme }) => theme.preview.dots.color_grey};
  }
  .MuiTimelineDot-defaultGrey {
    background-color: ${({ theme }) => theme.preview.dots.color_grey};
  }

  .MuiTimelineDot-defaultPrimary {
    background-color: ${({ theme }) => theme.preview.dots.color_primary};
  }
  .MuiTimelineDot-defaultSecondary {
    background-color: ${({ theme }) => theme.preview.dots.color_secondary};
  }
`;

export const Preview = styled.object`
  padding: 5px 10px;
  margin: 20px 0 0;
  background-color: ${({ theme }) => theme.preview.color_preview};
  max-width: 500px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  /* overflow-x: hidden; */

  .Document {
    border: 1px solid rgba(0, 0, 0, 0.2);
    /* overflow-y: hidden; */
  }
  .Page {
  }
`;

export const Title = styled.p`
  font-family: Roboto-Bold;
  font-size: 20px;
  padding: 15px 0;
  padding-bottom: ${({ withoutBottomPadding }) => withoutBottomPadding && "0"};
  clear: both;
  display: inline-block;
  white-space: nowrap;
`;
export const Subtitle = styled.p`
  font-family: Roboto-Medium;
  font-size: 18px;
  width: 100%;
  text-align: center;
`;
export const Label = styled.p`
  font-family: Roboto;
  font-size: 14px;
  color: ${({ theme }) => theme.form.label};
  padding: 25px 0 0;
`;
export const Description = styled.p`
  font-family: Roboto-Light;
  font-size: 14px;
  color: ${({ theme }) => theme.preview.color_description};
`;
export const Text = styled.p`
  font-family: Roboto-Medium;
  font-size: 14px;
  color: ${({ theme }) => theme.form.text};
  white-space: wrap;
`;

export const Icon = styled(icon)`
  padding: 10px 5px;
`;
export const Avatar = styled(avatar)``;

export const Button = styled(button)`
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 14px;
  margin: 10px 0 0;
  align-self: center;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 5px;
  align-items: center;

  ${Title} {
    margin: 0;
    padding: 0;
    font-size: 14px;
    text-align: left;
  }
  ${Subtitle} {
    font-size: 14px;
    font-family: Roboto-Light;
    color: ${({ theme }) => theme.preview.color_description};
    text-align: left;
  }
`;
