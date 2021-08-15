import styled from "styled-components";

export const Wrapper = styled.div`
    border-bottom: 1px solid #C7C7CC;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    max-width: 100%;
`;
export const Title = styled.div`
    display: flex;
    align-items: center;
    h3 {
        margin: 0;
        font-size: 24px;
        }
    }
`;
export const Buttons = styled.div`
    button {
            display: inline-block;
            margin: 3px;
            cursor: pointer;
            border: none;
            outline: none;
            overflow: hidden;
            background-color: transparent;
            img {
                width: 25px;
                height: 25px;
            }
        }
    }
`;
