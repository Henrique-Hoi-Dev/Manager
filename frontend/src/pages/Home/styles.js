import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;

  ul {
    display: flex;
    align-items: center;

    a {
      display: flex;
      align-items: center;

      width: 100px;
      height: 30px;
      border-radius: 4px;
      font-weight: bold;
      font-size: 14px;
      background: #23405c;
      color: #000;

      padding: 18px;
      margin: 50px;
      text-decoration: none;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#23405c')};
      }
    }
  }
`;
