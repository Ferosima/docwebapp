import styled from "styled-components";
import icon from "../Icon";
import input from "../Input";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  align-self: center;

  form {
    display: flex;
    flex-direction: column;
    width: -webkit-fill-available;
    padding: 0 80px;
    max-width: 650px;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Separator = styled.div`
  padding: 20px;
`;

export const Text = styled.p``;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #c7c7cc;
  padding: 30px 0 15px;

  p${Text} {
    font-family: Roboto-Bold;
    font-size: 20px;
    /* padding: 0 5px; */
  }
`;
export const Icon = styled(icon)`
  padding: 25px;
`;
export const Input = styled(input)`
  padding: 0 0 20px;
`;
