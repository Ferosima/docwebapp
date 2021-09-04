import styled from "styled-components";
import select from "@material-ui/core/Select";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  background: ${({ theme }) => theme.background};
  transition: background-color 1s, color 1s;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 60px;
  @media (max-width: 700px) {
    padding: 20px 30px;
  } ;
`;
export const Item = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 20px;
  ${Container} {
    width: fit-content;
    padding: 0;
  }
`;
export const Select = styled(select)`
  .MuiSelect-root {
    color: ${({ theme }) => theme.color_text};
    border: ${({ theme }) => theme.border_line};
    background-color: ${({ theme }) => `${theme.background}!imporant`};
    border-radius: 7px !important ;
    overflow: hidden;
  }
  .MuiSelect-outlined {
    color: ${({ theme }) => theme.color_text};
  }
  .MuiSelect-icon {
    filter: ${({ theme }) => theme.form.filter};
  }
  .MuiOutlinedInput-notchedOutline {
    border: none;
  }
`;
export const Title = styled.p`
  color: ${({ theme }) => theme.color_text};
  font-size: 18px;
`;
export const Subtitle = styled.p`
  color: ${({ theme }) => theme.form.info};
  font-size: 16px;
`;
