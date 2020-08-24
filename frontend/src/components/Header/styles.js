import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #1979a9;
  padding: 0 30px;
`;
export const Content = styled.div`
  height: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
    }

    a {
      font-weight: bold;
      color: #000;
      text-decoration: none;
      font-size: 20px;
      margin-right: 10px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: flex;
      color: #333;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      font-weight: bold;
      text-decoration: none;
      color: #999;
    }
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.3);
    background: #000;
  }
  button {
    margin: 10px;
    width: 50px;
    height: 25px;
    background: #d31d19;
    font-weight: bold;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#d31d19')};
    }
  }
`;
