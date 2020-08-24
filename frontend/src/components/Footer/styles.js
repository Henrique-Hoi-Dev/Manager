import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 60px;
  background: #1979a9;
  position: static;
  bottom: 0;

  div {
    max-width: 800px;
    margin: 0 auto;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      font-size: 20px;
      font-weight: bold;
      text-decoration: none;
      color: #000;

      svg {
        margin-right: 5px;
      }
    }
  }
`;
