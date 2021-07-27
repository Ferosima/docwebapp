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
    font-family: Roboto-Black;
    font-size: 48px;
    align-self: end;
    color: #263238;
    margin: 0;
    padding: 0 0 60px 0;
  }

  @media (max-width: 680px) {
    h1{
      padding: 30px 0;
    }
   }
   
  form {
    display: flex;
    flex-direction: column;
    width: -webkit-fill-available;
    /* justify-content: center; */
    /* align-content: center; */

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
      font-family: Roboto-Medium;
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
      font-family: Roboto;
    }

    button[type="submit"],
    input[type="submit"] {
      background: #426EF3;
      border-radius: 10px;
      color: white;
      border: none;
      padding: 15px;
      margin:5px 0;
      width: 100%;
      font-size: 20px;
      font-family: Roboto;
    }

    input:focus {
      border: 1px solid #2339c3;
    }
    input[type="submit"]:focus{
      border: 0}

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


  a {
    font-family: Roboto-Medium;
    color: #2f49fb;
    cursor:pointer;
  }
  a:active
 {
    opacity: 0.8;
  }
}
`;
export const ErrorText = styled.p`
  padding: 5px 0 15px 0;
  font-family: Roboto-Medium;
  font-size: 13px;
  color: #d80404;
  align-self: self-end;
`;
