import styled from "styled-components";
import select from "@material-ui/core/Select";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  background: ${({ theme }) => theme.background};
  transition: background-color 1s, color 1s;
  justify-content: center;
  align-items: center;
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
