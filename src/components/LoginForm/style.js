import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  max-width: 700px;
  width: -webkit-fill-available;

  .row {
    display: flex;
    flex-direction: row;
    align-self: flex-start;
  }

  h1 {
    font-family: Mulish-Black;
    font-size: 48px;
    align-self: end;
    color: #263238;
    margin: 0;
    padding: 0 0 60px 0;
  }

  form {
    display: flex;
    flex-direction: column;
    width: -webkit-fill-available;

    .input_wrapper{
      flex:1;
      margin: 0 20px 0;
    }
    .row {
      align-self: inherit;
      justify-content: space-between;
    }

    a,
    p {
      padding: 5px 0 15px 0;
      font-family: Mulish-SemiBold;
      font-size: 13px;
    }

    p {
      color: #d80404;
    }

    a {
      color: #2f49fb;
      text-decoration-line: none;
    }

    input {
      outline: none;
      display: block;
      box-sizing: border-box;
      width: 100%;
      border-radius: 4px;
      border: 1px solid #acb7c5;
      border-radius: 5px;
      padding: 15px 15px;
      font-size: 16px;
    }

    label {
      margin: 0;
      padding: 5px 0;
      color: #263238;
      font-size: 16px;
      font-family: Mulish;
    }

    button[type="submit"],
    input[type="submit"] {
      background: #2f4afb;
      border-radius: 10px;
      color: white;
      border: none;
      padding: 15px;
      margin:5px 0;
      width: 100%;
      font-size: 20px;
      font-family: Mulish;
    }

    input:focus {
      border: 1px solid #2339c3;
    }

    a:active,
    button[type="submit"]:active,
    input[type="button"]:active,
    input[type="submit"]:active {
      // transition: 0.3s all;
      transform: none;
      opacity: 0.8;
    }
  }

  a,
  p {
    padding: 5px 0 15px 0;
    font-size: 13px;
  }

  p {
    color: #455a64;
    padding-right: 5px;
  }

  a {
    font-family: Mulish-SemiBold;
    color: #2f49fb;
    cursor:pointer;
  }
  a:active
 {
    opacity: 0.8;
  }
}
`;
