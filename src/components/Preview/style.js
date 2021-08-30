import styled from "styled-components";
import button from "../Button";
import icon from "../Icon";
import avatar from "../Avatar";

export const Background = styled.div`
  /* width: ${({ isOpen }) => (isOpen ? "fit-content" : "10px")}; */
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
  transition: width 1s;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  overflow: hidden;
  width: ${({ isOpen }) => (isOpen ? "350px" : "0px")};
  height: 100%;
  box-sizing: border-box;
  background-color: #f8f9fb;
  @media (max-width: 850px) {
    height: 100%;
    width: ${({ isOpen }) => (isOpen ? "270px" : "0px")};
  }
  @media (max-width: 700px) {
    height: 100%;
    width: ${({ isOpen }) => (isOpen ? "300px" : "0")};
  }
`;
export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: 100%;
  border-right: 1px solid #c7c7cc;
  border-left: 1px solid #c7c7cc;
  align-items: center;
  padding: 5px 0;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  overflow: auto;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  overflow: auto;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  height: 100%;
  background: #fff;
  box-sizing: border-box;
`;

export const Preview = styled.object`
  padding: 5px 10px;
  margin: 20px 0 0;
  background-color: #f9fbff;
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
  color: #26395a;
`;
export const Subtitle = styled.p`
  font-family: Roboto-Medium;
  font-size: 18px;
  color: #252733;
`;
export const Label = styled.p`
  font-family: Roboto;
  font-size: 14px;
  color: #7f8587;
  padding: 25px 0 0;
`;
export const Description = styled.p`
  font-family: Roboto-Light;
  font-size: 14px;
  color: #455a64;
`;
export const Text = styled.p`
  font-family: Roboto-Medium;
  font-size: 14px;
  color: #263238;
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
`;

export const Item = styled.button`
  display: flex;
  flex-direction: row;
  width: 100%;
  /* justify-content: space-between; */
  background-color: ${({ isSelected }) => (isSelected ? "#4481F6" : "#fff")};
  padding: 5px;
  align-items: center;
  cursor: pointer;

  ${Title} {
    margin: 0;
    padding: 0;
    font-size: 14px;
    text-align: left;
    color: #263238;
  }
  ${Subtitle} {
    font-size: 14px;
    font-family: Roboto-Light;
    color: #acb7c5;
    text-align: left;
  }
`;
