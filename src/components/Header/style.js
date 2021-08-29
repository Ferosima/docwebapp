import styled from "styled-components";
import icon from "../Icon";

export const Wrapper = styled.div`
  border-bottom: 1px solid #c7c7cc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 20px;
  max-width: 100%;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.h3`
  margin: 0;
  font-size: 22px;
  user-select: none;
`;
export const Buttons = styled.div`
    button {
            display: flex;
            margin-left:3px;
            cursor: pointer;
            border: none;
            outline: none;
            overflow: hidden;
            background-color: transparent;
            user-select: none;
            img {
                width: 24px;
                height: 24px;
            }
        }

        button:active {
            transform: none;
            opacity: 0.8;
        }
    }
`;
export const Icon = styled(icon)`
  padding: 0 10px 0 0;
  display: none;
  @media (max-width: 700px){
   display: flex;
  };
`;
