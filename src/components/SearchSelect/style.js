import styled from "styled-components";

export const Title = styled.p`
  font-family: ${({ bold }) => (bold ? "Roboto-Bold" : "Roboto-Medium")};
  font-size: 14px;
  text-align: left;
  margin-top: 20px;
  color: ${({ theme }) => theme.form.label};
`;
export const Subtitle = styled.p`
  font-size: 14px;
  font-family: Roboto-Light;
  color: ${({ theme }) => theme.form.info};
  text-align: ${({ textAlign }) => textAlign || "left"};
  padding: ${({ padding }) => padding || "0"};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .select-search {
    /* z-index: 100; */
    position: relative;
  }
  .select-search__value {
    display: flex;
    justify-content: center;
  }
  .select-search__select {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 5px 0 15px;
    /* height: 20vh; */
    max-height: 20vh;
    height: 20vh;
    border-radius: 5px;
    border: ${({ theme }) => theme.input.border_input};
    overflow: hidden;
  }
  .select-search__options {
    padding: 0px;
    list-style: none;
    height: auto;
    overflow-y: auto;
    overflow-x: hidden;
    /* display: flex; */
    flex-direction: column;
    justify-content: center;
    margin: 0;
    /* z-index: 100; */
    /* border-radius: 5px;
    border: 1px solid #ccd3e4; */
    box-sizing: border-box;
    ::-webkit-scrollbar {
      width: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      border: 1px solid #afb6c8;
      border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #dee5f0;
      border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #9da9b9;
    }
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: ${({ theme, withBorder }) => withBorder && theme.input.border_input};

  .select-search__select {
    /* border: 1px solid #afb6c8; */
    align-items: center;
    border-radius: 5px;
    overflow-y: auto;
    background: white;
    /* position: relative; */
    position: absolute;

    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 999 !important;

    height: fit-content;
    max-height: 20vh;

    -webkit-box-shadow: 0px 4px 10px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 4px 10px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 4px 10px 2px rgba(34, 60, 80, 0.2);
  }
  .select-search__options {
    /* padding: 0 5px; */
    list-style: none;
    overflow-y: auto;
    display: block;
    /* max-height: 200px; */
    /* width: 500px; */

    overflow-y: scroll;
    margin: auto;
    width: 100%;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Item = styled.button`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  background-color: ${({ isSelected, theme }) => (isSelected ? "#477bff" : theme.card.background)};
  padding: 5px;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.card.color_preview};
  }

  ${Title} {
    margin: 0;
    font-size: 14px;
    color: ${({ theme }) => theme.form.text};
  }
`;

export const Input = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;

  align-items: center;
  border-radius: 5px;
  border: ${({ theme }) => theme.input.border_input};

  input {
    outline: none;
    display: block;
    box-sizing: border-box;
    width: 100%;
    border: none;
    padding: 5px 5px;
    font-size: 14px;
    font-family: Roboto;
    background: transparent;
    color: ${({ theme }) => theme.color_text};
  }

  input:focus {
    border: none;
  }

  input::placeholder {
    color: ${({ theme }) => theme.color_text_secondary};
    font-size: 14px;
    font-family: Roboto;
  }
`;
