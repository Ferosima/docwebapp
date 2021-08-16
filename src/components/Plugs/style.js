import styled from "styled-components";
import icon from "../Icon";
import button from "../Button";

export const Text = styled.p``;

export const Icon = styled(icon)`
  padding: 20px;
`;
export const Button = styled(button)`
  margin: 10px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  ${Text} {
    color: ${({ theme }) => theme.color || "#939499"};
    font-family: ${({ theme }) => theme.fontFamily || "Roboto"};
    font-size: ${({ theme }) => theme.textSize || "18px"};
    padding: ${({ theme }) => theme.paddingText || "0"};
  }
`;
