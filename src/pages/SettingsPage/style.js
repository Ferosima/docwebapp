import select from "react-select";
import styled from "styled-components";

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

export const Title = styled.p`
  color: ${({ theme }) => theme.color_text};
  font-size: 18px;
`;
export const Subtitle = styled.p`
  color: ${({ theme }) => theme.form.info};
  font-size: 16px;
`;
export const StyledSelect = styled(select)`
  width: 150px;
  .react-select__control {
    background: ${({ theme }) => theme.background};
    border: ${({ theme }) => theme.border_line};
    transition: all 1s;
    ${Title} {
      color: ${({ theme }) => theme.color_text};
      font-size: 16px;
      padding: 0 5px;
    }
  }
  .react-select__control--is-focused {
    box-shadow: ${({ theme }) => `0 0 0 1px ${theme.primary_color}`};
  }
  .react-select__single-value {
    color: ${({ theme }) => theme.color_text};
  }
  .react-select__menu {
    background: ${({ theme }) => theme.background};
  }
  .react-select__menuPortal {
    padding: 0;
  }
`;
export const Select = (props) => <StyledSelect classNamePrefix="react-select" {...props} />;
export const Option = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 2px 5px;
  border-bottom: ${({ theme }) => theme.border_line};

  ${Title} {
    font-size: 16px;
  }
  ${Subtitle} {
    font-size: 14px;
  }
`;
export const SelectStyles = {
  menuList: (provided, state) => ({ ...provided, background: "red" }),
};
