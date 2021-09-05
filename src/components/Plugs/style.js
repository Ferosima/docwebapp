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
  padding: ${({ theme }) => theme.padding || "10px"};
  ${Text} {
    color: ${({ theme, type }) => theme.plugs[type]?.color || theme.color_text};
    font-family: ${({ theme, type }) => theme.plugs[type]?.fontFamily || "Roboto"};
    font-size: ${({ theme, type }) => theme.plugs[type]?.textSize || "18px"};
    padding: ${({ theme, type }) => theme.plugs[type]?.paddingText || "0"};
    text-align: center;
  }
  ${Icon} {
    color: ${({ theme, type }) => theme.plugs[type]?.color || theme.color_text};
  }
`;
export const Logo = styled.img`
  width: 40px;
  height: 40px;
  @media (max-width: 700px) {
    width: 50px;
    height: 50px;
  }
  @keyframes pulse {
    from {
      transform: scale(1);
    }

    to {
      transform: scale(1.2);
    }
  }

  animation-duration: 0.8s;
  animation-name: pulse;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
`;
