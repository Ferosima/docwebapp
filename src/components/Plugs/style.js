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
  padding: ${({ theme }) => theme.padding || "0"};
  ${Text} {
    color: ${({ theme, type }) => theme.plugs[type]?.color || theme.color_text};
    font-family: ${({ theme, type }) => theme.plugs[type]?.fontFamily || "Roboto"};
    font-size: ${({ theme, type }) => theme.plugs[type]?.textSize || "18px"};
    padding: ${({ theme, type }) => theme.plugs[type]?.paddingText || "0"};
  }
  ${Icon} {
    color: ${({ theme, type }) => theme.plugs[type]?.color || theme.color_text};
  }
`;
