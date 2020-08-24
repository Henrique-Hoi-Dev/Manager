import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 500px;
  background: #1979a9;
  border-radius: 4px;
  padding: 60px;
  margin: 100px auto;

  button {
    width: 100px;
    height: 35px;
    border: 0;
    color: #000;
    border-radius: 4px;
    margin-right: 10px;
    margin-top: 10px;
    padding: 10px;
    font-weight: bold;
    background: #23405c;

    display: flex;
    align-items: center;

    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#23405c')};
    }
  }

  div {
    display: flex;
    flex-direction: row;

    .nova-lista {
      display: flex;
      flex-direction: row;
      align-items: center;
      text-decoration: none;
      color: #000;
    }
    .novo-repo {
      width: 120px;
      height: 40px;
    }
  }

  h1 {
    display: flex;
    align-items: center;

    svg {
      margin-right: 5px;
    }
  }
`;

export const Form = styled.form`
  display: grid;
  justify-content: space-between;
  align-items: center;

  ul {
    margin: 30px;
    font-size: 20px;
    font-weight: bold;
  }

  input {
    width: 400px;
    height: 35px;
    border: 3px solid #fff;
    font-weight: bold;
    display: flex;
    margin-top: 10px;
    border-radius: 4px;
  }
`;

export const Button = styled.button`
  width: 100px;
  height: 35px;
  border: 0;
  color: #fff;
  border-radius: 4px;
  margin-top: 10px;
  padding: 10px;
  font-weight: bold;
  background: #333;

  display: flex;
  align-items: center;

  svg {
    margin-left: 5px;
  }
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
