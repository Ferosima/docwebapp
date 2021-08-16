import styled from "styled-components";

export const Wrapper = styled.div`
  border-bottom: 1px solid #c7c7cc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  max-width: 100%;
  align-items: center;
`;
export const Title = styled.h3`
  margin: 0;
  font-size: 24px;
  user-select: none;
`;
export const Buttons = styled.div`
    button {
            display: inline-block;
            margin-left:3px;
            cursor: pointer;
            border: none;
            outline: none;
            overflow: hidden;
            background-color: transparent;
            user-select: none;
            img {
                width: 25px;
                height: 25px;
            }
        }

        button:active {
            transform: none;
            opacity: 0.8;
        }
    }
`;
