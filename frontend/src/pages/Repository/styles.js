import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 500px;
  background: #1979a9;
  border-radius: 4px;

  padding: 60px;
  margin: 100px auto;

  h1 {
    display: flex;
    flex-direction: row;
  }

  .button-voltar {
    width: 110px;
    position: relative;
    top: 0px;
    left: 300px;
  }
`;

export const List = styled.form`
  display: flex;
  flex-direction: column;

  input {
    max-width: 500px;
    height: 35px;
    border: 3px solid #fff;
    font-weight: bold;
    display: flex;
    margin-top: 60px;
    border-radius: 4px;
  }

  button {
    width: 100px;
    height: 35px;
    border: 0;
    color: #000;
    border-radius: 4px;
    margin-top: 15px;
    padding: 10px;
    font-weight: bold;
    background: #23405c;

    display: flex;
    align-items: center;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#23405c')};
    }

    svg {
      margin-left: 5px;
    }
  }
`;

export const Button = styled.button`
  width: 80px;
  height: 35px;
  color: #000;
  border-radius: 4px;
  padding: 10px;
  font-weight: bold;
  background: #23405c;

  display: flex;
  align-items: center;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.03, '#23405c')};
  }

  svg {
    margin-left: 5px;
  }

  .voltar {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    color: #000;
  }
`;

export const SubmitButton = styled.button`
  width: 80px;
  height: 35px;
  color: #fff;
  border-radius: 4px;
  margin-right: 10px;
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

export const Ul = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    font-size: 20px;
    font-style: bold;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  & + li {
    border-top: 1px solid #eee;
  }

  a {
    color: #333;
    text-decoration: none;
  }
`;
